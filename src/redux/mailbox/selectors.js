import { createSelector } from "@reduxjs/toolkit"

export const selectUsers = (state) => state.mailbox.users;
export const selectFilter = (state) => state.mailbox.filter;

export const selectFilteredUsers = createSelector(
    [selectUsers, selectFilter], (users, filter) => {
        return users.filter(user =>
            user.userName.toLowerCase().includes(filter.toLowerCase()) ||
            user.userEmail.toLowerCase().includes(filter.toLowerCase())
          );
    }
)