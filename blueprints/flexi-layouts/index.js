/*jshint node:true*/
module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(options) {
    return this.addAddonToProject({ name: 'flexi-config' });
  }
};
