const message = [
  {
    image: "1.jpg",
    avatarstatus: "success",
    title: "Romen Joined the Team!",
    desc: "Congratulate him",
    time: "9:30 AM",
  },
  {
    image: "2.jpg",
    avatarstatus: "warning",
    title: "New message received",
    desc: "Salma sent you new message",
    time: "9:08 AM",
  },
  {
    image: "3.jpg",
    avatarstatus: "error",
    title: "New Payment received",
    desc: "Check your earnings",
    time: "9:08 AM",
  },
  {
    image: "4.jpg",
    avatarstatus: "success",
    title: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "9:08 AM",
  },
];

const notification = [
  {
    color: "error",
    icon: "home",
    title: "Luanch Admin",
    desc: "Just see the my new admin!",
  },
  {
    color: "primary",
    icon: "calendar",
    title: "Event today",
    desc: "Just a reminder that you have event",
  },
  {
    color: "warning",
    icon: "settings",
    title: "Settings",
    desc: "You can customize this template as you want",
  },
  {
    color: "secondary",
    icon: "users",
    title: "Johny John",
    desc: "Assign her new tasks",
  },
];

const profile = [
  {
    color: "primary",
    icon: "user",
    to: "/settings",
    title: "My-Settings",
    desc: "Account-Settings",
  },
  {
    color: "secondary",
    icon: "inbox",
    to: "/inbox",
    title: "My-Inbox",
    desc: "Messages-Notifications",
  },
  {
    color: "success",
    icon: "play",
    to: "/tasks/my",
    title: "My-Tasks",
    desc: "Todos-and-Tasks",
  },
];

export { message, profile, notification };
