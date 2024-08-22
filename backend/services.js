class Services {
  constructor() {
    this.services = {};
    this.instances = {};
  }

  // Add a service with a name
  add(name, service, args = [], type="singleton") {
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


  // Retrieve a service by name
  getService(name) {
    const serviceObj = this.services[name];

    //check id serice was registered
    if (!serviceObj) {
      //throw error if service was not registered
      throw new Error(`Service ${name} was not registered`);
    }

    if (serviceObj.type == "transient") {
      //check if service is already instantiated
      if (serviceObj.instantiated) {
        //return the stale service
        return this.instances[name]
      }

      //parse service args
      const serviceArgs = serviceObj.serviceArgs

      //create new instance of the service and store it
      this.instances[name] = new serviceObj.service(...serviceArgs)
      serviceObj.instantiated = true
      //return the newly intantiated service
      return this.instances[name];
    }
    else if(serviceObj.type == "singleton"){
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
    //return a new instance of the service
    return new serviceObj.service(...serviceArgs)
  }
}

export default Services;