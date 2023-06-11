export interface Menu {
  header?: string
  group?: string
  model?: boolean
  title?: any
  icon?: string
  to?: any
  children?: Menu[]
  order?: number
}

export const sidebarItem: Menu[] = [
  { header: "Personal" },
  {
    title: "Dashboard",
    icon: "home",
    to: "/dashboard",
  },
  // {
  //   title: "Terminal",
  //   icon: "tablet",
  //   to: "/terminal",
  // },

  {
    group: "/scores/",
    model: false,
    icon: "target",
    title: "Score-title",
    children: [
      {
        title: "My-Score",
        to: "/scores/my",
      },
      {
        title: "Score-Search",
        to: "/scores/search",
      },
      {
        title: "Score-Registration",
        to: "/scores/register",
      }
    ]
  },
  {
    group: "/tasks/",
    model: false,
    icon: "check-circle",
    title: "Tasks",
    children: [
      // {
      //   title: "My-Tasks",
      //   to: "/tasks/my",
      // },
      {
        title: "Task-List",
        to: "/tasks/",
      },
      {
        title: "Create-Task",
        to: "/tasks/create",
      }
    ]
  },
  {
    group: "/projects/",
    model: false,
    icon: "award",
    title: "Projects",
    children: [
      {
        title: "GPT-Colearning",
        to: "/projects/gpt-colearning",
      }
    ]
  },
  // {
  //   group: "/profile/",
  //   model: false,
  //   icon: "check-circle",
  //   title: "Profile",
  //   children: [
  //     {
  //       title: "User-List",
  //       to: "/tasks/",
  //     },
  //     {
  //       title: "MySettings",
  //       to: "/settings",
  //     },
  //     {
  //       title: "Inbox",
  //       to: "/inbox",
  //     }
  //   ]
  // },
  // {
  //   group: "/events/",
  //   model: false,
  //   icon: "calendar",
  //   title: "Events",
  //   children: [
  //     {
  //       title: "My-Events",
  //       to: "/events/my",
  //     },
  //     {
  //       title: "Event-List",
  //       to: "/events/",
  //     },
  //     {
  //       title: "Create-Event",
  //       to: "/events/create",
  //     }
  //   ]
  // },
  // {
  //   group: "/bounty/",
  //   model: false,
  //   icon: "award",
  //   title: "Bounty",
  //   children: [
  //     {
  //       title: "My-Bounty",
  //       to: "/bounty/my",
  //     },
  //     {
  //       title: "Bounty-Pub",
  //       to: "/bounty/",
  //     },
  //     {
  //       title: "Launch-Bounty",
  //       to: "/bounty/launch",
  //     }
  //   ]
  // },
  // {
  //   group: "/proposals/",
  //   model: false,
  //   icon: "clipboard",
  //   title: "Proposals",
  //   children: [
  //     {
  //       title: "My-Proposals",
  //       to: "/proposals/my",
  //     },
  //     {
  //       title: "Proposal-List",
  //       to: "/proposals/",
  //     },
  //     {
  //       title: "Proposal-Generator",
  //       to: "/proposals/generator",
  //     }
  //   ]
  // },
  // {
  //   group: "/governance/",
  //   model: false,
  //   icon: "layers",
  //   title: "Governance",
  //   children: [
  //     {
  //       title: "Governance-Guide",
  //       to: "/governance/guide",
  //     },
  //     {
  //       title: "Governance-Advices",
  //       to: "/governance/advices",
  //     },
  //     {
  //       title: "Supervisory-Complaints",
  //       to: "/governance/complaints",
  //     }
  //   ]
  // },
  // {
  //   group: "/educations/",
  //   model: false,
  //   icon: "compass",
  //   title: "Education",
  //   children: [
  //     {
  //       title: "Learning-Resources",
  //       to: "/educations/learning",
  //     },
  //     {
  //       title: "Collaboration-Handbook",
  //       to: "/educations/collaboration",
  //     },
  //     {
  //       title: "Operation-College",
  //       to: "/educations/operation",
  //     },
  //     {
  //       title: "Project-Management-Class",
  //       to: "/educations/project",
  //     },
  //     {
  //       title: "Governance-Engineer-Bootcamp",
  //       to: "/educations/governance",
  //     }
  //   ]
  // },
  // {
  //   group: "/resources/",
  //   model: false,
  //   icon: "download",
  //   title: "Resource-management",
  //   children: [
  //     {
  //       title: "Document-Resources",
  //       to: "/resources/documents",
  //     },
  //     {
  //       title: "Media-Resources",
  //       to: "/resources/media",
  //     },
  //     {
  //       title: "Resource-Links",
  //       to: "/resources/links",
  //     }
  //   ]
  // },
  // {
  //   header: "Project",
  // },
  // {
  //   title: "Project-list",
  //   icon: "list",
  //   to: "/projects",
  // },
  // {
  //   group: "/projects/",
  //   model: false,
  //   icon: "star",
  //   title: "My-Projects",
  //   children: [
  //     {
  //       title: "Project-Management",
  //       to: "/projects/my",
  //     },
  //     {
  //       title: "Team-Members",
  //       to: "/projects/teams",
  //     },
  //     {
  //       title: "Event-Management",
  //       to: "/projects/events",
  //     },
  //   ]
  // },
  // {
  //   group: "/projects/",
  //   model: false,
  //   icon: "box",
  //   title: "Project-Resources",
  //   children: [
  //     {
  //       title: "Project-Grants-Apply",
  //       to: "/projects/grants",
  //     },
  //     {
  //       title: "Brand-Licensing-Apply",
  //       to: "/projects/branding",
  //     },
  //     {
  //       title: "Media-Publicity-Apply",
  //       to: "/projects/publicity",
  //     },
  //   ]
  // },
  // {
  //   header: "Guilds",
  // },
  // {
  //   title: "Guilds-Overview",
  //   icon: "flag",
  //   to: "/guilds",
  // },
  // {
  //   group: "/guilds/",
  //   model: false,
  //   icon: "book",
  //   title: "Guild-Governance",
  //   children: [
  //     {
  //       title: "Guild-Onboarding",
  //       to: "/guilds/onboarding",
  //     },
  //     {
  //       title: "Guild-Members",
  //       to: "/guilds/members",
  //     },
  //     {
  //       title: "Guild-Coordination",
  //       to: "/guilds/coordination",
  //     },
  //     {
  //       title: "Guild-Events",
  //       to: "/guilds/events",
  //     },
  //     {
  //       title: "Guild-Projects",
  //       to: "/guilds/projects",
  //     },
  //   ]
  // },
  // {
  //   group: "/guilds/",
  //   model: false,
  //   icon: "box",
  //   title: "Guild-Resources",
  //   children: [
  //     {
  //       title: "Guild-Services",
  //       to: "/guilds/services",
  //     },
  //     {
  //       title: "Guild-Treasury",
  //       to: "/guilds/treasury",
  //     },
  //     {
  //       title: "Guild-Budget",
  //       to: "/guilds/budget",
  //     },
  //   ]
  // },
  // {
  //   header: "City-Hall",
  // },
  // {
  //   title: "Cowork-Kanban",
  //   icon: "trello",
  //   to: "/cityhall",
  // },
  // {
  //   group: "/cityhall/onboarding/",
  //   model: false,
  //   icon: "users",
  //   title: "Onboarding-Management",
  //   children: [
  //     {
  //       title: "Onboarding-Members",
  //       to: "/cityhall/onboarding/members",
  //     },
  //     {
  //       title: "Onboarding-Activity",
  //       to: "/cityhall/onboarding/activities",
  //     },
  //     {
  //       title: "Onboarding-Tasks",
  //       to: "/cityhall/onboarding/tasks",
  //     },
  //     {
  //       title: "Onboarding-Management",
  //       to: "/cityhall/onboarding/management",
  //     }
  //   ]
  // },
  // {
  //   group: "/cityhall/proposals/",
  //   model: false,
  //   icon: "thumbs-up",
  //   title: "Proposal-Management",
  //   children: [
  //     {
  //       title: "Proposal-Veto",
  //       to: "/cityhall/proposals/veto",
  //     },
  //     {
  //       title: "Brand-Licensing-Review",
  //       to: "/cityhall/proposals/branding",
  //     },
  //     {
  //       title: "Media-Publicity-Review",
  //       to: "/cityhall/proposals/publicity",
  //     }
  //   ]
  // },
  // {
  //   group: "/cityhall/assets/",
  //   model: false,
  //   icon: "dollar-sign",
  //   title: "Asset-Management",
  //   children: [
  //     {
  //       title: "Budget-Plan",
  //       to: "/cityhall/assets/budget",
  //     },
  //     {
  //       title: "Score-Review",
  //       to: "/cityhall/assets/reviews/scr",
  //     },
  //     {
  //       title: "Token-Review",
  //       to: "/cityhall/assets/reviews/tokens",
  //     },
  //     {
  //       title: "SGN-Review",
  //       to: "/cityhall/assets/reviews/sgn",
  //     }
  //   ]
  // },
  // {
  //   group: "/cityhall/permissions/",
  //   model: false,
  //   icon: "key",
  //   title: "Permission-Management",
  //   children: [
  //     {
  //       title: "SBT-Permissions",
  //       to: "/cityhall/permissions/sbt",
  //     },
  //     {
  //       title: "Token-Permissions",
  //       to: "/cityhall/permissions/token",
  //     },
  //     {
  //       title: "Proposal-Permissions",
  //       to: "/cityhall/permissions/proposals",
  //     },
  //     {
  //       title: "Project-Permissions",
  //       to: "/cityhall/permissions/projects",
  //     },
  //     {
  //       title: "Event-Permissions",
  //       to: "/cityhall/permissions/events",
  //     },
  //     {
  //       title: "Guild-Permissions",
  //       to: "/cityhall/permissions/guilds",
  //     },
  //     {
  //       title: "Account-Permissions",
  //       to: "/cityhall/permissions/accounts",
  //     },
  //     {
  //       title: "Resource-Permissions",
  //       to: "/cityhall/permissions/resource",
  //     },
  //     {
  //       title: "OS-Permissions",
  //       to: "/cityhall/permissions/os",
  //     }
  //   ]
  // },
  // {
  //   group: "/cityhall/branding/",
  //   model: false,
  //   icon: "heart",
  //   title: "Branding-Management",
  //   children: [
  //     {
  //       title: "Coperation-Database",
  //       to: "/cityhall/branding/cooperation",
  //     },
  //     {
  //       title: "Important-Contacts",
  //       to: "/cityhall/branding/contacts",
  //     },
  //     {
  //       title: "City-Liaisons",
  //       to: "/cityhall/branding/cities",
  //     },
  //     {
  //       title: "Media-Center",
  //       to: "/cityhall/branding/media",
  //     }
  //   ]
  // },
  // {
  //   group: "/cityhall/infra/",
  //   model: false,
  //   icon: "hard-drive",
  //   title: "Infra-Management",
  //   children: [
  //     {
  //       title: "DAO-Tools",
  //       to: "/cityhall/infra/tools",
  //     },
  //     {
  //       title: "Collaboration-Tools",
  //       to: "/cityhall/infra/collaboration",
  //     },
  //     {
  //       title: "Onchain-Contracts",
  //       to: "/cityhall/infra/blockchain",
  //     },
  //     {
  //       title: "Server-Management",
  //       to: "/cityhall/infra/cloud",
  //     },
  //     {
  //       title: "Public-Account",
  //       to: "/cityhall/infra/account",
  //     },
  //     {
  //       title: "Data-and-Backup",
  //       to: "/cityhall/infra/backup",
  //     }
  //   ]
  // },
  // { header: "Home" },
  // {
  //   title: "Analytical",
  //   icon: "pie-chart",
  //   to: "/dashboards/analytical",
  // },
  // {
  //   title: "eCommerce",
  //   icon: "shopping-bag",
  //   to: "/dashboards/ecommerce",
  // },
  // {
  //   title: "Modern",
  //   icon: "hard-drive",
  //   to: "/dashboards/modern",
  // },
  // {
  //   header: "Apps",
  // },
  // {
  //   title: "Chat",
  //   icon: "message-square",
  //   to: "/apps/chat",
  // },
  // {
  //   title: "Calendar",
  //   icon: "calendar",
  //   to: "/apps/fullcalendar",
  // },
  // {
  //   title: "Ecommerce-Shop",
  //   icon: "shopping-cart",
  //   to: "/apps/shop",
  // },

  // {
  //   title: "Contact List",
  //   icon: "phone",
  //   to: "/apps/contact-list",
  // },
  // {
  //   title: "Contact Grid",
  //   icon: "smartphone",
  //   to: "/apps/contact-grid",
  // },

  // {
  //   title: "Todo",
  //   icon: "check-square",
  //   to: "/apps/todo",
  // },
  // { header: "Components" },
  // {
  //   group: "/ui-components/",

  //   model: false,
  //   icon: "grid",
  //   title: "Ui Components",
  //   children: [
  //     {
  //       title: "Alerts",
  //       icon: "disc",
  //       to: "/ui-components/alert",
  //     },
  //     {
  //       title: "Avatar",
  //       icon: "disc",
  //       to: "/ui-components/avatar",
  //     },
  //     {
  //       title: "Badge",
  //       icon: "disc",
  //       to: "/ui-components/badge",
  //     },
  //     {
  //       title: "Banner",
  //       icon: "disc",
  //       to: "/ui-components/banner",
  //     },
  //     {
  //       title: "Appbar",
  //       icon: "disc",
  //       to: "/ui-components/appbar",
  //     },
  //     {
  //       title: "Toolbar",
  //       icon: "disc",
  //       to: "/ui-components/toolbar",
  //     },
  //     {
  //       title: "Systembar",
  //       icon: "disc",
  //       to: "/ui-components/systembar",
  //     },
  //     {
  //       title: "Breadcrumb",
  //       icon: "disc",
  //       to: "/ui-components/breadcrumb",
  //     },
  //     {
  //       title: "Buttons",
  //       icon: "disc",
  //       to: "/ui-components/buttons",
  //     },
  //     {
  //       title: "Cards",
  //       icon: "disc",
  //       to: "/ui-components/cards",
  //     },
  //     {
  //       title: "Carousel",
  //       icon: "disc",
  //       to: "/ui-components/carousel",
  //     },
  //     {
  //       title: "Chips",
  //       icon: "disc",
  //       to: "/ui-components/chips",
  //     },
  //     {
  //       title: "Dialogs",
  //       icon: "disc",
  //       to: "/ui-components/dialogs",
  //     },
  //     {
  //       title: "Dividers",
  //       icon: "disc",
  //       to: "/ui-components/dividers",
  //     },
  //     {
  //       title: "Expansion Panel",
  //       icon: "disc",
  //       to: "/ui-components/expansionpanel",
  //     },
  //     {
  //       title: "Footer",
  //       icon: "disc",
  //       to: "/ui-components/footer",
  //     },
  //     {
  //       title: "Grids",
  //       icon: "disc",
  //       to: "/ui-components/grids",
  //     },
  //     {
  //       title: "Button Group",
  //       icon: "disc",
  //       to: "/ui-components/button-group",
  //     },
  //     {
  //       title: "Chip Group",
  //       icon: "disc",
  //       to: "/ui-components/chip-group",
  //     },
  //     {
  //       title: "Item Group",
  //       icon: "disc",
  //       to: "/ui-components/item-group",
  //     },
  //     {
  //       title: "Slide Group",
  //       icon: "disc",
  //       to: "/ui-components/slide-group",
  //     },
  //     {
  //       title: "Images",
  //       icon: "disc",
  //       to: "/ui-components/images",
  //     },
  //     {
  //       title: "Menus",
  //       icon: "disc",
  //       to: "/ui-components/menus",
  //     },
  //     {
  //       title: "Navigation Drawers",
  //       icon: "disc",
  //       to: "/ui-components/navigation-drawers",
  //     },
  //     {
  //       title: "Pagination",
  //       icon: "disc",
  //       to: "/ui-components/pagination",
  //     },
  //     {
  //       title: "Progress Circular",
  //       icon: "disc",
  //       to: "/ui-components/progress-circular",
  //     },
  //     {
  //       title: "Progress Linear",
  //       icon: "disc",
  //       to: "/ui-components/progress-linear",
  //     },
  //     {
  //       title: "Rating",
  //       icon: "disc",
  //       to: "/ui-components/rating",
  //     },
  //     {
  //       title: "Tabs",
  //       icon: "disc",
  //       to: "/ui-components/tabs",
  //     },
  //     {
  //       title: "Timeline",
  //       icon: "disc",
  //       to: "/ui-components/timeline",
  //     },
  //     {
  //       title: "Tooltips",
  //       icon: "disc",
  //       to: "/ui-components/tooltips",
  //     },
  //   ],
  // },
  // {
  //   group: "/style-animation",
  //   model: false,
  //   icon: "box",
  //   title: "Style & Animation",
  //   children: [
  //     {
  //       title: "Border Radius",
  //       icon: "disc",
  //       to: "/style-animation/border-radius",
  //     },
  //     {
  //       title: "Elevation",
  //       icon: "disc",
  //       to: "/style-animation/elevation",
  //     },
  //     {
  //       title: "Flex",
  //       icon: "disc",
  //       to: "/style-animation/flex",
  //     },
  //     {
  //       title: "Text and Typography",
  //       icon: "disc",
  //       to: "/style-animation/text-typography",
  //     },
  //     {
  //       title: "Transitions",
  //       icon: "disc",
  //       to: "/style-animation/transitions",
  //     },
  //   ],
  // },
  // { header: "Charts" },
  // {
  //   title: "ApexCharts",
  //   icon: "bar-chart-2",
  //   to: "/charts/apexcharts",
  // },
  // { header: "Forms" },
  // {
  //   group: "/form-elements",
  //   model: false,
  //   icon: "file",
  //   title: "Form Elements",
  //   children: [
  //     {
  //       title: "Autocompletes",
  //       icon: "disc",
  //       to: "/form-elements/feautocompletes",
  //     },
  //     {
  //       title: "Combobox",
  //       icon: "disc",
  //       to: "/form-elements/fecombobox",
  //     },
  //     {
  //       title: "File Inputs",
  //       icon: "disc",
  //       to: "/form-elements/fefileinputs",
  //     },
  //     {
  //       title: "Inputs",
  //       icon: "disc",
  //       to: "/form-elements/feinputs",
  //     },

  //     {
  //       title: "Selection Controls",
  //       icon: "disc",
  //       to: "/form-elements/feselectioncontrols",
  //     },
  //     {
  //       title: "Selects",
  //       icon: "disc",
  //       to: "/form-elements/feselects",
  //     },
  //     {
  //       title: "Sliders",
  //       icon: "disc",
  //       to: "/form-elements/fesliders",
  //     },
  //     {
  //       title: "Textareas",
  //       icon: "disc",
  //       to: "/form-elements/fetextareas",
  //     },
  //     {
  //       title: "Textfields",
  //       icon: "disc",
  //       to: "/form-elements/fetextfields",
  //     },
  //   ],
  // },
  // {
  //   group: "/form-layouts",
  //   model: false,
  //   icon: "codesandbox",
  //   title: "Form Layouts",
  //   children: [
  //     {
  //       title: "Form Action",
  //       icon: "disc",
  //       to: "/form-layouts/flformaction",
  //     },
  //     {
  //       title: "Form Basic",
  //       icon: "disc",
  //       to: "/form-layouts/flformbasic",
  //     },

  //     {
  //       title: "Form Horizontal",
  //       icon: "disc",
  //       to: "/form-layouts/flformhorizontal",
  //     },
  //   ],
  // },
  // { header: "Widgets" },
  // {
  //   title: "Custom Cards",
  //   icon: "copy",
  //   to: "/widgets/custom-cards",
  // },
  // { header: "Tables" },
  // {
  //   title: "Simple Table",
  //   icon: "layout",
  //   to: "/tables",
  // },
  // {
  //   title: "Editable Table",
  //   icon: "edit",
  //   to: "/editable-table",
  // },
  // { header: "Authentication" },
  // {
  //   title: "Boxed Login",
  //   icon: "log-in",
  //   to: "/authentication/boxedlogin",
  // },
  // {
  //   title: "Login",
  //   icon: "unlock",
  //   to: "/authentication/fulllogin",
  // },
  // {
  //   title: "Boxed Register",
  //   icon: "user-plus",
  //   to: "/authentication/boxedregister",
  // },
  // {
  //   title: "Register",
  //   icon: "user",
  //   to: "/authentication/fullregister",
  // },
  // {
  //   title: "Error",
  //   icon: "alert-triangle",
  //   to: "/authentication/error",
  // },
  // { header: "Icons" },
  // {
  //   title: "Material",
  //   icon: "codesandbox",
  //   to: "/icons/material",
  // },
  // {
  //   title: "Feather",
  //   icon: "feather",
  //   to: "/icons/feather",
  // }
]
