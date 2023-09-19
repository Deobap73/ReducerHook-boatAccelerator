// src/state/reducers/reducer.jsx
export function reducer(state, action) {
  switch (action.type) {
    case "gearUp":
      if (state.accelerate && state.count < 5) {
        return { ...state, count: state.count + 1 };
      }
      return state;

    case "gearDown":
      if (state.accelerate && state.count > -2) {
        return { ...state, count: state.count - 1 };
      }
      return state;

    case "toggleEngine":
      if (state.engineStatus === "ON") {
        // Se o motor estava ligado e agora está sendo desligado, faça o reset dos valores
        return { ...state, engineStatus: "OFF", count: 0, speedCount: 0 };
      } else {
        return {
          ...state,
          engineStatus: state.engineStatus === "ON" ? "OFF" : "ON",
        };
      }

    case "toggleAccelerate":
      return { ...state, accelerate: !state.accelerate };

    case "updateSpeed":
      return { ...state, speedCount: state.speedCount + action.value };

    default:
      return state;
  }
}
export const initialState = {
  count: 0,
  engineStatus: "OFF",
  accelerate: false,
  speedCount: 0,
};
