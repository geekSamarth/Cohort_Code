# Library Management System

### Tables

- User
- Books
- Author
- Book_Records

## User Schema

- id
- name
- phone number
- address
- Role : 'ADMIN' or 'USER'

## Books Schema

- ID
- Name
- ISBN_Number
- Price

## Author

- ID
- Name
- Instagram
- List[Books]

## Book_Records

- ID
- Book ID
- User ID
- Issue Time
- Return Time
- Is Returned
