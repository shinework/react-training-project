import React from 'react';
import * as actions from './../constants/action';

const INITIAL_STATE = {
  isPending: false,
  error: null,
  messages: [],
  pending: false,
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.LOAD_MESSAGES_PENDING_ACTION:
      return {...state, pending: true};

    case actions.LOAD_MESSAGES_SUCCESS_ACTION:
      return {
        ...state,
        pending: false,
        messages: action.messages
      };

    case actions.LOAD_MESSAGES_ERROR_ACTION:
      return {...state, pending: false};

    case actions.LOAD_MESSAGES_PENDING:
        return {...state, isPending: true};

    case actions.LOAD_MESSAGES_SUCCESS:
        return {...state, isPending: false, messages: action.messages , error: null};

    case actions.LOAD_MESSAGES_ERROR:
        return {...state, isPending: false, error: action.error};

    case actions.ADD_MESSAGE_ACTION:
      return {
        messages: [...state.messages, {message: action.message, username: action.username}]
      };

    case actions.REMOVE_MESSAGE_ACTION:
      return {
        messages: state.messages.filter((message, i) => i !== action.index)
      };

    default:
      return state
  }
};

export default messages;
