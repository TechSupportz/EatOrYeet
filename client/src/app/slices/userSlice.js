import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
	name: "user",
	initialState: {
		users: [],
		isLoggedIn: false,
		showLoginDialog: false,
		status: null,
	},
	reducers: {
		setIsLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload
		},
		setShowLoginDialog: (state, action) => {
			state.showLoginDialog = action.payload
		},
	},
	extraReducers: {

	}
})

export const { setIsLoggedIn, setShowLoginDialog } = userSlice.actions

export default userSlice.reducer