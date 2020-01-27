'use strict';

const events = require('./event.js');

events.on('save', handleSave);

function handleSave(payload) {
    console.log(`Record ${payload.id} was saved`);
    events.emit('cache-updated', {id:payload.id});
}