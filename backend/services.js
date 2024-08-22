class Services {
  constructor() {
    this.services = {};
    this.instances = {};
  }

  // Add a service with a name
  add(name, service, args = [], type = "singleton") {
    if (typeof service !== 'function') {
      throw new Error('Service must be a function or class');
    }
    this.services[name] = { service: service, serviceArgs: args, instantiated: false, type: type };
  }


  addSingleton(name, service, args = []) {
    this.add(name, service, args, "singleton")
  }

  addTransient(name, service, args = []) {
    this.add(name, service, args, "transient")
  }

  resolveDependencies(args) {
    //dependent array
    let servicesArr = [];
    //make a clone of args to avoid interfering with it
    let newArgs = structuredClone(args)


    for (let i = 0; i < newArgs.length; i++) {
      //check if there is a dependency in the array (starts with $)
      if (newArgs[i][0] == "$") {
        //if so push it to the service array
        servicesArr.push(newArgs[i].substring(1))
        //pop $dependency from the array (instead the service instance itself will be pushed in the code below)
        newArgs.pop(i)
      }
    }



    let serviceObj; //holds service Object 
    for (let index = 0; index < servicesArr.length; index++) {
      const serviceName = servicesArr[index];
      // for each service found in teh serviceArr call getService to get the corresponding instance of that service
      serviceObj = this.getService(serviceName);
      //push service instance into the args
      newArgs.push(serviceObj)
    }

    return newArgs
  }
  // Retrieve a service by name
  getService(name) {
    const serviceObj = this.services[name];

    //check id serice was registered
    if (!serviceObj) {
      //throw error if service was not registered
      throw new Error(`Service ${name} was not registered`);
    }

    if (serviceObj.type == "singleton") {
      //check if service is already instantiated
      if (serviceObj.instantiated) {
        //return the stale service
        return this.instances[name]
      }

      //parse service args
      const serviceArgs = serviceObj.serviceArgs

      //resolve any dependency in the arguments of the service
      let newArgs = this.resolveDependencies(serviceArgs)

      //create new instance of the service and store it
      this.instances[name] = new serviceObj.service(...newArgs)
      serviceObj.instantiated = true

      //return the newly intantiated service
      return this.instances[name];
    }

    else if (serviceObj.type == "transient") {
      return this.getNewService(serviceObj)
    }

  }

  getNewService(serviceObj) {
    //check id serice was registered
    if (!serviceObj) {
      //throw error if service was not registered
      throw new Error(`Service ${name} was not registered`);
    }

    //parse service args
    const serviceArgs = serviceObj.serviceArgs

    //resolve any dependency in the arguments of the service
    let newArgs = this.resolveDependencies(serviceArgs)

    //return a new instance of the service
    return new serviceObj.service(...newArgs)
  }
}

export default Services;