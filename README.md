# Blogging Project

## Don't
- Do not send a response in HTML/XML
- Do not send a response in string
- Do not call DB in the controller

## Do's
- APIs should send JSON responses (status, message, data)
- APIs should be rate-limited - 500ms: 2hit/sec.

### 1. Authentication (JWT based auth)
- Register - email(unique), username(unique), password, name
- Login - Email/username, password(Protected)
- Logout
- JWT Authentication

### 2. Create Blog
- Only text data
- Limit (1000 char max), error(limit exceed)
- Schema (title, text, creation_datetime, userID)

### 3. Home Page
- All the blogs in descending order of time
- Pagination of the API (limit - 10)
- Get only not deleted blogs
- Get only blogs of following

### 4. My Blog
- All the blogs are in descending order of time
- Pagination of the API(limit-10)

## 5. Edit Blog
- Edit can only happen until 30 mins

## 6. Delete Blogs
- Allow the user to delete the blog anytime

## Database collections
1. User
2. Blogs
3. Follow

## Follow-up tasks
1. Follow(Create): Allow the user to follow someone.
    - Schema (follower_userID, following_userID, creation Date time)
2. Follower List(Read): Pagination, Desc order of time
3. Following List(Read): Pagination, Desc order of time
4. Unfollow: Delete the entry
5. Bin:
    - Delete should now delete the item, it should move it to the bin 
    - isDelete: true, deletion_deletiontime: time of deletion
    - Update the read API's to check for isDelete: true
    - Crow to delete the deleted tweets from db- Everyday to delete 30 days old tweets