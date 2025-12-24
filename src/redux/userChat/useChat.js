import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeChatUserId: null, // kis user ki chat open hai
    isChatOpen: false,      // chat window open hai ya nahi
    messages: [],           // us user ke messages
    activeChatUserName: null,      // naya field
    activeChatUserProfile: null,   // naya field
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {

        // 👉 contact pe click
        openChat: (state, action) => {
            state.activeChatUserId = action.payload.id;
            state.activeChatUserName = action.payload.name;
            state.activeChatUserProfile = action.payload.profilePhoto;
            state.isChatOpen = true;
            if (state.activeChatUserId !== action.payload.id) {
    state.messages = []; // sirf tab clear karna jab user change ho
}
        },

        // 👉 back / close button
        closeChat: (state) => {
            state.activeChatUserId = null;
            state.activeChatUserName = null;
            state.activeChatUserProfile = null;
            state.isChatOpen = false;
            state.messages = [];
        },

    addMessage: (state, action) => {
    // 1. Check karein agar messages undefined hai to usey empty array banayein
    if (!state.messages) {
        state.messages = [];
    }
    
    // 2. Sirf tab push karein agar action.payload valid message ho
    if (action.payload && action.payload._id) {
        // Duplicate check (live socket mein aksar message double trigger ho jata hai)
        const exists = state.messages.find(m => m._id === action.payload._id);
        if (!exists) {
            state.messages.push(action.payload);
        }
    }
},

setMessages: (state, action) => {
    // 3. Agar backend se data na aaye to empty array set karein (taaki push crash na kare)
    state.messages = Array.isArray(action.payload) ? action.payload : [];
}
    },
});

export const {
    openChat,
    closeChat,
    setMessages,
    addMessage,
} = chatSlice.actions;

export default chatSlice.reducer;
