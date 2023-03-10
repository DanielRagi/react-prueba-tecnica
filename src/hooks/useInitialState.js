import { useState } from "react";

const initialState = {}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	return {
		state,
        setState
	}
}

export default useInitialState;
