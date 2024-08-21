class Services {
  constructor() {
    this.services = {};
  }

  // Add a service with a name
  add(name, service,args) {
    if (typeof service !== 'function') {
      throw new Error('Service must be a function or class');
    }
        this.services[name] = {serviceName:service,serviceArgs:args};
  }

  

  // Retrieve a service by name
  getService(name) {
    const service = this.services[name].serviceName;
    const serviceArgs = this.services[name].serviceArgs
    if (!service) {
      throw new Error(`Service ${name} not found`);
    }
    return new service(...serviceArgs);
  }
}

export default Services;