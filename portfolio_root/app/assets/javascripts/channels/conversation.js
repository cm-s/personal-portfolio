App.conversation = App.cable.subscriptions.create("ConversationChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    alert(data['message'])
  },

  send: function(message) {
    // '.perform' ing the send method of the channel (app/channels/conversation_channel.rb)
    // Both methods share a name to represent one action.
    console.debug('ran function');
    return this.perform('send', { message: message });
  }
});
