# Bookease - Meeting Scheduling Made Easy

Bookease is a modern, feature-rich scheduling platform that simplifies the process of booking meetings, appointments, and events. It provides an intuitive interface for users to manage their availability, create event types, and allow others to schedule time with them seamlessly.

!Bookease

## Features

### For Users
- **Custom Booking Link**: Get your personalized booking link (yourdomain.com/username)
- **Event Types**: Create various event types with different durations and details
- **Smart Scheduling**: Set your availability and let Bookease handle the rest
- **Google Calendar Integration**: Automatic syncing with Google Calendar 
- **Google Meet**: Automatic generation of Google Meet links for virtual meetings
- **Dashboard**: View upcoming meetings at a glance
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### For Bookers
- **Easy Booking Process**: Simple form to book available times
- **Real-time Availability**: See only times that fit the host's schedule
- **Calendar Integration**: Add meetings to Google Calendar automatically
- **Meeting Links**: Get Google Meet links for virtual meetings

## Tech Stack

### Frontend
- **Next.js**: React framework for building the UI
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Shadcn UI**: High-quality UI components built with Radix UI and Tailwind
- **React Hook Form**: For efficient form handling
- **Zod**: For schema validation
- **Embla Carousel**: For testimonial carousels
- **React Day Picker**: For calendar date selection

### Backend
- **Next.js Server Components**: For server-rendered React components
- **Next.js Server Actions**: For handling form submissions and data mutations
- **Clerk**: For authentication and user management
- **Prisma ORM**: For database modeling and queries
- **PostgreSQL**: For data storage (hosted on Neon)
- **Google APIs**: For calendar and meeting integrations

## Database Architecture

The application uses a PostgreSQL database with the following main models:

### User
Stores user information linked to Clerk authentication.
```
- id: UUID
- clerkUserId: String (unique)
- email: String (unique)
- username: String (unique)
- name: String
- imageUrl: String
- createdAt: DateTime
- updatedAt: DateTime
```

### Event
Represents bookable event types created by users.
```
- id: UUID
- title: String
- description: String
- duration: Integer (minutes)
- userId: UUID (foreign key to User)
- isPrivate: Boolean
- createdAt: DateTime
- updatedAt: DateTime
```

### Booking
Records of scheduled meetings.
```
- id: UUID
- eventId: UUID (foreign key to Event)
- userId: UUID (foreign key to User)
- name: String (booker's name)
- email: String (booker's email)
- additionalInfo: String
- startTime: DateTime
- endTime: DateTime
- meetLink: String (Google Meet link)
- googleEventId: String
- createdAt: DateTime
- updatedAt: DateTime
```

### Availability
Stores user availability preferences.
```
- id: UUID
- userId: UUID (foreign key to User)
- timeGap: Integer (minutes between bookings)
- createdAt: DateTime
- updatedAt: DateTime
```

### DayAvailability
Individual availability settings for each day of the week.
```
- id: UUID
- availabilityId: UUID (foreign key to Availability)
- day: Enum (MONDAY to SUNDAY)
- startTime: DateTime
- endTime: DateTime
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/bookease.git
cd bookease
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```
DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

4. Run database migrations
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser


Made with 💗 by Harshvardhan Sharma