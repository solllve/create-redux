import { createStore} from "redux"

const reducer = (state={
    alert: false
  }, action) => {
    switch(action.type) {
      case "LAUNCH_ALERT": {
        return {
          alert: action.alert
        }
      }
  }
  return state
}

const store = createStore(reducer)

export default store
