import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory("/"),  
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
      component: () => import("@/layouts/full/Dashboard.vue"),
      children: [
        {
          name: "Dashboard",
          path: "/dashboard",
          component: () => import("@/views/dashboards/dashboard/Dashboard.vue"),
        },
        {
          name: "Terminal",
          path: "/terminal",
          component: () => import("@/views/terminal/Terminal.vue"),
        },
        {
          name: "MySettings",
          path: "/settings",
          component: () => import("@/views/profile/MySettings.vue"),
        },
        {
          name: "MyInbox",
          path: "/inbox",
          component: () => import("@/views/profile/MyInbox.vue"),
        },
        {
          name: "MyTasks",
          path: "/tasks/my",
          component: () => import("@/views/tasks/MyTasks.vue"),
        },
        {
          name: "TaskList",
          path: "/tasks/",
          component: () => import("@/views/tasks/TaskList.vue"),
        },
        {
          name: "MyScores",
          path: "/scores/my",
          component: () => import("@/views/scores/MyScores.vue"),
        },
        {
          name: "ScoresSearch",
          path: "/scores/search",
          component: () => import("@/views/scores/ScoresSearch.vue"),
        },
        {
          name: "ScoreRegistration",
          path: "/scores/register",
          component: () => import("@/views/scores/ScoreRegistration.vue"),
        },
        {
          name: "MyEvents",
          path: "/events/my",
          component: () => import("@/views/events/MyEvents.vue"),
        },
        {
          name: "EventList",
          path: "/events/",
          component: () => import("@/views/events/EventList.vue"),
        },
        {
          name: "CreateEvent",
          path: "/events/create",
          component: () => import("@/views/events/CreateEvent.vue"),
        },
        {
          name: "MyBounty",
          path: "/bounty/my",
          component: () => import("@/views/bounty/MyBounty.vue"),
        },
        {
          name: "BountyList",
          path: "/bounty/",
          component: () => import("@/views/bounty/BountyList.vue"),
        },
        {
          name: "LaunchBounty",
          path: "/bounty/launch",
          component: () => import("@/views/bounty/LaunchBounty.vue"),
        },

        {
          name: "MyProposals",
          path: "/proposals/my",
          component: () => import("@/views/proposals/MyProposals.vue"),
        },
        {
          name: "ProposalList",
          path: "/proposals/",
          component: () => import("@/views/proposals/ProposalList.vue"),
        },
        {
          name: "ProposalGenerator",
          path: "/proposals/generator",
          component: () => import("@/views/proposals/ProposalGenerator.vue"),
        },
        {
          name: "CreateTask",
          path: "/tasks/create",
          component: () => import("@/views/tasks/CreateTask.vue"),
        },
        {
          name: "SupervisoryComplaints",
          path: "/governance/complaints",
          component: () => import("@/views/governance/SupervisoryComplaints.vue"),
        },
        {
          name: "GovernanceGuide",
          path: "/governance/guide",
          component: () => import("@/views/governance/GovernanceGuide.vue"),
        },
        {
          name: "GovernanceAdvices",
          path: "/governance/advices",
          component: () => import("@/views/governance/GovernanceAdvices.vue"),
        },
        {
          name: "LearningResources",
          path: "/educations/learning",
          component: () => import("@/views/educations/LearningResources.vue"),
        },
        {
          name: "CollaborationHandbook",
          path: "/educations/collaboration",
          component: () => import("@/views/educations/CollaborationHandbook.vue"),
        },
        {
          name: "OperationCollege",
          path: "/educations/operation",
          component: () => import("@/views/educations/OperationCollege.vue"),
        },
        {
          name: "GovernanceEngineerBootcamp",
          path: "/educations/governance",
          component: () => import("@/views/educations/GovernanceEngineerBootcamp.vue"),
        },
        {
          name: "ProjectManagementClass",
          path: "/educations/project",
          component: () => import("@/views/educations/ProjectManagementClass.vue"),
        },
        {
          name: "DocumentResources",
          path: "/resources/documents",
          component: () => import("@/views/resources/DocumentResources.vue"),
        },
        {
          name: "MediaResources",
          path: "/resources/media",
          component: () => import("@/views/resources/MediaResources.vue"),
        },
        {
          name: "ResourceLinks",
          path: "/resources/links",
          component: () => import("@/views/resources/ResourceLinks.vue"),
        },
        {
          name: "ProjectList",
          path: "/projects/",
          component: () => import("@/views/projects/ProjectList.vue"),
        },
        {
          name: "ProjectManagement",
          path: "/projects/my",
          component: () => import("@/views/projects/ProjectManagement.vue"),
        },
        {
          name: "ProjectTeams",
          path: "/projects/teams",
          component: () => import("@/views/projects/ProjectTeams.vue"),
        },
        {
          name: "ProjectEvents",
          path: "/projects/events",
          component: () => import("@/views/projects/ProjectEvents.vue"),
        },
        {
          name: "ProjectGrants",
          path: "/projects/grants",
          component: () => import("@/views/projects/ProjectGrants.vue"),
        },
        {
          name: "ProjectBranding",
          path: "/projects/branding",
          component: () => import("@/views/projects/ProjectBranding.vue"),
        },
        {
          name: "ProjectPublicity",
          path: "/projects/publicity",
          component: () => import("@/views/projects/ProjectPublicity.vue"),
        },
        {
          name: "GuildList",
          path: "/guilds/",
          component: () => import("@/views/guilds/GuildList.vue"),
        },
        {
          name: "GuildOnboarding",
          path: "/guilds/onboarding",
          component: () => import("@/views/guilds/GuildOnboarding.vue"),
        },
        {
          name: "GuildMembers",
          path: "/guilds/members",
          component: () => import("@/views/guilds/GuildMembers.vue"),
        },
        {
          name: "GuildCoordination",
          path: "/guilds/coordination",
          component: () => import("@/views/guilds/GuildCoordination.vue"),
        },
        {
          name: "GuildEvents",
          path: "/guilds/events",
          component: () => import("@/views/guilds/GuildEvents.vue"),
        },
        {
          name: "GuildProjects",
          path: "/guilds/projects",
          component: () => import("@/views/guilds/GuildProjects.vue"),
        },
        {
          name: "GuildServices",
          path: "/guilds/services",
          component: () => import("@/views/guilds/GuildServices.vue"),
        },
        {
          name: "GuildBudget",
          path: "/guilds/budget",
          component: () => import("@/views/guilds/GuildBudget.vue"),
        },
        {
          name: "GuildTreasury",
          path: "/guilds/treasury",
          component: () => import("@/views/guilds/GuildTreasury.vue"),
        },
        {
          name: "CityhallKanban",
          path: "/cityhall/",
          component: () => import("@/views/cityhall/CityhallKanban.vue"),
        },
        {
          name: "BusinessDevelopment",
          path: "/cityhall/branding/bd",
          component: () => import("@/views/cityhall/branding/BusinessDevelopment.vue"),
        },
        {
          name: "CityLiaisons",
          path: "/cityhall/branding/cities",
          component: () => import("@/views/cityhall/branding/CityLiaisons.vue"),
        },
        {
          name: "CooperationDatabase",
          path: "/cityhall/branding/cooperation",
          component: () => import("@/views/cityhall/branding/CooperationDatabase.vue"),
        },
        {
          name: "ImportantContacts",
          path: "/cityhall/branding/contacts",
          component: () => import("@/views/cityhall/branding/ImportantContacts.vue"),
        },
        {
          name: "MediaCenter",
          path: "/cityhall/branding/media",
          component: () => import("@/views/cityhall/branding/MediaCenter.vue"),
        },
        {
          name: "BudgetPlan",
          path: "/cityhall/assets/budget",
          component: () => import("@/views/cityhall/assets/BudgetPlan.vue"),
        },
        {
          name: "ScoreReview",
          path: "/cityhall/assets/reviews/scr",
          component: () => import("@/views/cityhall/assets/ScoreReview.vue"),
        },
        {
          name: "SGNReview",
          path: "/cityhall/assets/reviews/sgn",
          component: () => import("@/views/cityhall/assets/SGNReview.vue"),
        },{
          name: "TokenReview",
          path: "/cityhall/assets/reviews/tokens",
          component: () => import("@/views/cityhall/assets/TokenReview.vue"),
        },
        {
          name: "OnboardingActivity",
          path: "/cityhall/onboarding/activities",
          component: () => import("@/views/cityhall/onboarding/OnboardingActivity.vue"),
        },
        {
          name: "OnboardingMembers",
          path: "/cityhall/onboarding/members",
          component: () => import("@/views/cityhall/onboarding/OnboardingMembers.vue"),
        },
        {
          name: "OnboardingTasks",
          path: "/cityhall/onboarding/tasks",
          component: () => import("@/views/cityhall/onboarding/OnboardingTasks.vue"),
        },
        {
          name: "OnboardingManagement",
          path: "/cityhall/onboarding/management",
          component: () => import("@/views/cityhall/onboarding/OnboardingManagement.vue"),
        },
        {
          name: "BrandLicensingReview",
          path: "/cityhall/proposals/branding",
          component: () => import("@/views/cityhall/proposals/BrandLicensingReview.vue"),
        },
        {
          name: "MediaPublicityReview",
          path: "/cityhall/proposals/publicity",
          component: () => import("@/views/cityhall/proposals/MediaPublicityReview.vue"),
        },
        {
          name: "ProposalVeto",
          path: "/cityhall/proposals/veto",
          component: () => import("@/views/cityhall/proposals/ProposalVeto.vue"),
        },
        {
          name: "AccountPermissions",
          path: "/cityhall/permissions/account",
          component: () => import("@/views/cityhall/permissions/AccountPermissions.vue"),
        },
        {
          name: "ProposalPermissions",
          path: "/cityhall/permissions/account",
          component: () => import("@/views/cityhall/permissions/ProposalPermissions.vue"),
        },
        {
          name: "EventPermissions",
          path: "/cityhall/permissions/event",
          component: () => import("@/views/cityhall/permissions/EventPermissions.vue"),
        },
        {
          name: "GuildPermissions",
          path: "/cityhall/permissions/guild",
          component: () => import("@/views/cityhall/permissions/GuildPermissions.vue"),
        },
        {
          name: "OSPermisions",
          path: "/cityhall/permissions/os",
          component: () => import("@/views/cityhall/permissions/OSPermisions.vue"),
        },
        {
          name: "ProjectPermissions",
          path: "/cityhall/permissions/project",
          component: () => import("@/views/cityhall/permissions/ProjectPermissions.vue"),
        },
        {
          name: "ResourcePermissions",
          path: "/cityhall/permissions/resource",
          component: () => import("@/views/cityhall/permissions/ResourcePermissions.vue"),
        },
        {
          name: "SBTPermissions",
          path: "/cityhall/permissions/sbt",
          component: () => import("@/views/cityhall/permissions/SBTPermissions.vue"),
        },
        {
          name: "TokenPermissions",
          path: "/cityhall/permissions/token",
          component: () => import("@/views/cityhall/permissions/TokenPermissions.vue"),
        },

        {
          name: "DAOTools",
          path: "/cityhall/infra/tools",
          component: () => import("@/views/cityhall/infra/DAOTools.vue"),
        },
        {
          name: "CollaborationTools",
          path: "/cityhall/infra/collaboration",
          component: () => import("@/views/cityhall/infra/CollaborationTools.vue"),
        },
        {
          name: "OnchainContracts",
          path: "/cityhall/infra/blockchain",
          component: () => import("@/views/cityhall/infra/OnchainContracts.vue"),
        },
        {
          name: "CloudServices",
          path: "/cityhall/infra/cloud",
          component: () => import("@/views/cityhall/infra/CloudServices.vue"),
        },
        {
          name: "PublicAccounts",
          path: "/cityhall/infra/account",
          component: () => import("@/views/cityhall/infra/PublicAccounts.vue"),
        },
        {
          name: "DataAndBackup",
          path: "/cityhall/infra/backup",
          component: () => import("@/views/cityhall/infra/DataAndBackup.vue"),
        },
        {
          name: "Apps",
          path: "apps/chat",
          component: () => import("@/views/apps/chat/Chat.vue"),
        },
        {
          name: "ContactList",
          path: "apps/contact-list",
          component: () => import("@/views/apps/contact-list/ContactList.vue"),
        },
        {
          name: "ContactGrid",
          path: "apps/contact-grid",
          component: () => import("@/views/apps/contact-grid/ContactGrid.vue"),
        },
        {
          name: "Ecommerce-shop",
          path: "apps/shop",
          component: () => import("@/views/apps/ecommerce/Listing.vue"),
        },
        {
          name: "Calendar",
          path: "apps/fullcalendar",
          component: () => import("@/views/apps/calendar/VCalendar.vue"),
        },
        {
          name: "Todo",
          path: "apps/todo",
          component: () => import("@/views/apps/todo/Todo.vue"),
        },
        {
          name: "ApexChart",
          path: "charts/apexcharts",
          component: () => import("@/views/charts/apexcharts/ApexCharts.vue"),
        },
        {
          name: "Alert",
          path: "ui-components/alert",
          component: () => import("@/views/ui-components/Alerts.vue"),
        },
        {
          name: "Avatar",
          path: "ui-components/avatar",
          component: () => import("@/views/ui-components/Avatar.vue"),
        },
        {
          name: "Badge",
          path: "/ui-components/badge",
          component: () => import("@/views/ui-components/Badge.vue"),
        },
        {
          name: "Banner",
          path: "/ui-components/banner",
          component: () => import("@/views/ui-components/Banner.vue"),
        },
        {
          name: "Banner",
          path: "/ui-components/banner",
          component: () => import("@/views/ui-components/Banner.vue"),
        },

        {
          name: "Appbar",
          path: "/ui-components/appbar",
          component: () => import("@/views/ui-components/Appbar.vue"),
        },
        {
          name: "Toolbar",
          path: "/ui-components/toolbar",
          component: () => import("@/views/ui-components/Toolbar.vue"),
        },
        {
          name: "Systembar",
          path: "/ui-components/systembar",
          component: () => import("@/views/ui-components/Systembar.vue"),
        },
        {
          name: "Breadcrumb",
          path: "/ui-components/breadcrumb",
          component: () => import("@/views/ui-components/Breadcrumb.vue"),
        },
        {
          name: "Buttons",
          path: "/ui-components/buttons",
          component: () => import("@/views/ui-components/Buttons.vue"),
        },
        {
          name: "Cards",
          path: "/ui-components/cards",
          component: () => import("@/views/ui-components/Cards.vue"),
        },
        {
          name: "Carousel",
          path: "/ui-components/carousel",
          component: () => import("@/views/ui-components/Carousel.vue"),
        },
        {
          name: "Chips",
          path: "/ui-components/chips",
          component: () => import("@/views/ui-components/Chips.vue"),
        },
        {
          name: "Dialogs",
          path: "/ui-components/dialogs",
          component: () => import("@/views/ui-components/Dialogs.vue"),
        },
        {
          name: "Dividers",
          path: "/ui-components/dividers",
          component: () => import("@/views/ui-components/Dividers.vue"),
        },
        {
          name: "Expansion Panel",
          path: "/ui-components/expansionpanel",
          component: () => import("@/views/ui-components/ExpansionPanel.vue"),
        },
        {
          name: "Footer",
          path: "/ui-components/footer",
          component: () => import("@/views/ui-components/Footer.vue"),
        },
        {
          name: "Grids",
          path: "/ui-components/grids",
          component: () => import("@/views/ui-components/Grids.vue"),
        },
        {
          name: "Button Groups",
          path: "/ui-components/button-group",
          component: () => import("@/views/ui-components/ButtonGroups.vue"),
        },
        {
          name: "Chip Groups",
          path: "/ui-components/chip-group",
          component: () => import("@/views/ui-components/ChipGroups.vue"),
        },
        {
          name: "Item Groups",
          path: "/ui-components/item-group",
          component: () => import("@/views/ui-components/ItemGroups.vue"),
        },
        {
          name: "Slide Groups",
          path: "/ui-components/slide-group",
          component: () => import("@/views/ui-components/SlideGroups.vue"),
        },
        {
          name: "Images",
          path: "/ui-components/images",
          component: () => import("@/views/ui-components/Images.vue"),
        },
        {
          name: "Menus",
          path: "/ui-components/menus",
          component: () => import("@/views/ui-components/Menus.vue"),
        },
        {
          name: "Navigation Drawers",
          path: "/ui-components/navigation-drawers",
          component: () =>
            import("@/views/ui-components/NavigationDrawers.vue"),
        },
        {
          name: "Pagination",
          path: "/ui-components/pagination",
          component: () => import("@/views/ui-components/Pagination.vue"),
        },
        {
          name: "Progress Circular",
          path: "/ui-components/progress-circular",
          component: () => import("@/views/ui-components/ProgressCircular.vue"),
        },
        {
          name: "Progress Linear",
          path: "/ui-components/progress-linear",
          component: () => import("@/views/ui-components/ProgressLinear.vue"),
        },
        {
          name: "Rating",
          path: "/ui-components/rating",
          component: () => import("@/views/ui-components/Rating.vue"),
        },
        {
          name: "Tabs",
          path: "/ui-components/tabs",
          component: () => import("@/views/ui-components/Tabs.vue"),
        },
        {
          name: "Timeline",
          path: "/ui-components/timeline",
          component: () => import("@/views/ui-components/Timeline.vue"),
        },
        {
          name: "Tooltips",
          path: "/ui-components/tooltips",
          component: () => import("@/views/ui-components/Tooltips.vue"),
        },
        {
          name: "Border Radius",
          path: "/style-animation/border-radius",
          component: () => import("@/views/style-animation/BorderRadius.vue"),
        },
        {
          name: "Elevation",
          path: "/style-animation/elevation",
          component: () => import("@/views/style-animation/Elevation.vue"),
        },
        {
          name: "Flex",
          path: "/style-animation/flex",
          component: () => import("@/views/style-animation/Flex.vue"),
        },
        {
          name: "Text Typography",
          path: "/style-animation/text-typography",
          component: () => import("@/views/style-animation/TextTypography.vue"),
        },
        {
          name: "Transitions",
          path: "/style-animation/transitions",
          component: () => import("@/views/style-animation/Transition.vue"),
        },
        {
          name: "FEAutocompletes",
          path: "/form-elements/FEautocompletes",
          component: () => import("@/views/form-elements/FEAutocompletes.vue"),
        },
        {
          name: "FECombobox",
          path: "/form-elements/FECombobox",
          component: () => import("@/views/form-elements/FECombobox.vue"),
        },
        {
          name: "FEFileInputs",
          path: "/form-elements/FEFileInputs",
          component: () => import("@/views/form-elements/FEFileInputs.vue"),
        },
        {
          name: "FEInputs",
          path: "/form-elements/FEInputs",
          component: () => import("@/views/form-elements/FEInputs.vue"),
        },
        {
          name: "FESelectionControls",
          path: "/form-elements/FESelectionControls",
          component: () =>
            import("@/views/form-elements/FESelectionControls.vue"),
        },
        {
          name: "FESelects",
          path: "/form-elements/FESelects",
          component: () => import("@/views/form-elements/FESelects.vue"),
        },
        {
          name: "FESliders",
          path: "/form-elements/FESliders",
          component: () => import("@/views/form-elements/FESliders.vue"),
        },
        {
          name: "FETextareas",
          path: "/form-elements/FETextareas",
          component: () => import("@/views/form-elements/FETextareas.vue"),
        },
        {
          name: "FETextfields",
          path: "/form-elements/FETextfields",
          component: () => import("@/views/form-elements/FETextfields.vue"),
        },
        {
          name: "FLFormAction",
          path: "/form-layouts/FLFormAction",
          component: () =>
            import("@/views/form-layouts/form-action/FLFormAction.vue"),
        },
        {
          name: "FLFormBasic",
          path: "/form-layouts/FLFormBasic",
          component: () =>
            import("@/views/form-layouts/form-basic/FLFormBasic.vue"),
        },
        {
          name: "FLFormHorizontal",
          path: "/form-layouts/FLFormHorizontal",
          component: () =>
            import("@/views/form-layouts/form-horizontal/FLFormHorizontal.vue"),
        },

        {
          name: "Tables",
          path: "/tables",
          component: () => import("@/views/tables/Tables.vue"),
        },
        {
          name: "Editable Table",
          path: "/editable-table",
          component: () => import("@/views/tables/EditableTable.vue"),
        },
        {
          name: "Material",
          path: "/icons/material",
          component: () => import("@/views/icons/MaterialIcons.vue"),
        },
        {
          name: "Feather",
          path: "/icons/feather",
          component: () => import("@/views/icons/FeatherIcons.vue"),
        },
        {
          name: "Custom Cards",
          path: "/widgets/custom-cards",
          component: () =>
            import("@/views/widgets/custom-cards/CustomCards.vue"),
        },
      ],
    },
    {
      path: "/authentication",
      component: () => import("@/layouts/blank/BlankLayout.vue"),
      children: [
        {
          name: "Login",
          path: "/authentication/fulllogin",
          component: () => import("@/views/authentication/FullLogin.vue"),
        },
        {
          name: "Boxed Login",
          path: "/authentication/boxedlogin",
          component: () => import("@/views/authentication/BoxedLogin.vue"),
        },
        {
          name: "Error",
          path: "/authentication/error",
          component: () => import("@/views/authentication/Error.vue"),
        },
        {
          name: "Register",
          path: "/authentication/fullregister",
          component: () => import("@/views/authentication/FullRegister.vue"),
        },
        {
          name: "Boxed Register",
          path: "/authentication/boxedregister",
          component: () => import("@/views/authentication/BoxedRegister.vue"),
        },
      ]
    }, {
      path: "/dashboards",
      redirect: "/dashboards/analytical",
      component: () => import("@/layouts/full/FullLayout.vue"),
      children: [
        {
          name: "Analytical",
          path: "/dashboards/analytical",
          component: () =>
            import("@/views/dashboards/analytical/Analytical.vue"),
        },
        {
          name: "Ecommerce",
          path: "/dashboards/ecommerce",
          component: () => import("@/views/dashboards/ecommerce/Ecommerce.vue"),
        },
        {
          name: "Modern",
          path: "/dashboards/modern",
          component: () => import("@/views/dashboards/modern/Modern.vue"),
        },
        
      ],
    },
  ],
})

export default router
