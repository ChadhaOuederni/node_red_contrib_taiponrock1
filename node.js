module.exports = function(RED) {
  function ChadhaNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function(msg) {
      msg.payload = "taiponrock";;
      node.send(msg);
    });
  }
  RED.nodes.registerType("taiponrock", ChadhaNode);
}
