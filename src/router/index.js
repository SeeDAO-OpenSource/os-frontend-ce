import Vue from "vue"
import Router from "vue-router"

import Body from "../components/body"
import Auth from "../auth/auth"

/* Auth */
import login from "../auth/login"
import callback from "../pages/callback"
import Register from "../auth/register"

import Terminal from "../pages/dashboard/terminal"

/* FAQ */
import Faq from "../pages/faq"

/* Support Ticket */
import Support from "../pages/support"

/* maintenance */
import Maintenance from "../pages/maintenance"

/* Error Pages */
import Error400 from "../errors/error_400"
import Error401 from "../errors/error_401"
import Error403 from "../errors/error_403"
import Error404 from "../errors/error_404"
import Error500 from "../errors/error_500"
import Error503 from "../errors/error_503"

/* Console */
import MetaforoConsole from "../pages/console/metaforo"

/* comingsoon */
import ComingsoonSimple from "../pages/comingsoon/comingsoon_simple"
import ComingsoonImage from "../pages/comingsoon/comingsoon_image"
import ComingsoonVideo from "../pages/comingsoon/comingsoon_video"

/* Dashboards */
import MemberDashboard from "../pages/dashboard/member"
import GuestDashobard from "../pages/dashboard/guest"

/* Widgets */
import GeneralWidgets from "../pages/widgets/general_widgets"
import ChartWidgets from "../pages/widgets/chart_widgets"

/* projects */
import projectlist from "../pages/project/project-list"
import createproject from "../pages/project/create-project"

/* uikits */
import alert from "../pages/uikits/alert"
import Helperclasses from "../pages/uikits/helper_classes"
import Avatars from "../pages/uikits/avatars"
import Grid from "../pages/uikits/grid"
import Tagpills from "../pages/uikits/tag_pills"
import Typography from "../pages/uikits/typography"
import Progressbar from "../pages/uikits/progress_bar"
import Modal from "../pages/uikits/modal"
import Popover from "../pages/uikits/popover"
import Tooltip from "../pages/uikits/tooltip"
import Spinners from "../pages/uikits/loader"
import Dropdown from "../pages/uikits/dropdown"
import Accordion from "../pages/uikits/accordion"
import Boxshadow from "../pages/uikits/box_shadow"
import Lists from "../pages/uikits/lists"
/* advance */
import Scrollable from "../pages/advance/scrollable"
import Sweetalert from "../pages/advance/sweetalert"
import Tree from "../pages/advance/tree"
import Rating from "../pages/advance/rating"
import Pagination from "../pages/advance/pagination"
import Ribbons from "../pages/advance/ribbons"
import Tour from "../pages/advance/tour"
import Rangeslider from "../pages/advance/range_slider"
import Breadcrumb from "../pages/advance/breadcrumb"
import Upload from "../pages/advance/upload"
import Sticky from "../pages/advance/sticky"
import Toastr from "../pages/advance/toastr"
import ImageCropper from "../pages/advance/image_cropper"
import Draganddrop from "../pages/advance/draganddrop"
/* charts */
import GoogleChart from "../pages/charts/google_chart"
// import Chartjs from '../pages/charts/chartjs';
import Chartist from "../pages/charts/chartist"
import ApexChart from "../pages/charts/apexchart"
/* icons */
import Flag from "../pages/icons/flag"
import Ico from "../pages/icons/ico_icon"
import Themify from "../pages/icons/themify_icon"
import Fontawesome from "../pages/icons/font_awesome"
import FeatherIcon from "../pages/icons/feather_icon"
import WhetherIcon from "../pages/icons/weather"

/* Buttons */
import Default_buttons from "../pages/buttons/default_buttons"
import Flat_buttons from "../pages/buttons/flat_buttons"
import Edge_buttons from "../pages/buttons/edge_buttons"
import Raised_buttons from "../pages/buttons/raised_buttons"
import Group_buttons from "../pages/buttons/group_buttons"
/* Form */
import FormWizrd from "../pages/forms/form_wizard"
import FormValidation from "../pages/forms/form_validation"
import FormBaseInputs from "../pages/forms/form_base_inputs"
import FormCheckboxRadio from "../pages/forms/form_checkbox_radio"
import FormInputGroups from "../pages/forms/form_input_groups"
import FormMegaOptions from "../pages/forms/form_mega_options"
/* Form Widgets */
import FormDatepicker from "../pages/form_widgets/datepicker"
import FormSelect2 from "../pages/form_widgets/select2"
import FormSwitch from "../pages/form_widgets/switch"
import FormTypeahead from "../pages/form_widgets/typeahead"
import FormClipboard from "../pages/form_widgets/clipboard"
import FormTouchspin from "../pages/form_widgets/touchspin"
/* E-Commerce */
import Products from "../pages/ecommerce/products"
import ProductDetails from "../pages/ecommerce/product_details"
import Cart from "../pages/ecommerce/cart"
import Wishlist from "../pages/ecommerce/wishlist"
import Checkout from "../pages/ecommerce/checkout"
import Invoice from "../pages/ecommerce/invoice"
import Success from "../pages/ecommerce/success"
import OrderHistory from "../pages/ecommerce/order_history"
import PaymentDetails from "../pages/ecommerce/payment_details"
/* Chat */
import Chat from "../pages/chat/chat"
import Videochat from "../pages/chat/videochat"
/* Email  */
import Email from "../pages/email/app"
/* File Manager  */
import FileManager from "../pages/filemanager"
/* Kanban board */
import Kanban from "../pages/kanban"
/* Cards */
import Basic from "../pages/cards/basic"
import Creative from "../pages/cards/creative"
import Tabbed from "../pages/cards/tabbed"
import Draggable from "../pages/cards/draggable"

/* pricing */
import Pricing from "../pages/pricing/pricing"
/* sample page */
import SamplePage from "../pages/sample_page"
import Todo from "../pages/todo/todo"
import FirebaseTodo from "../pages/todo/firebase_todo"
/* bootstrap tables */
import BootstrapBasic from "../pages/tables/bootstrap/basic"
import BootstrapSizing from "../pages/tables/bootstrap/sizing"
import BootstrapBorder from "../pages/tables/bootstrap/border"
import BootstrapStyling from "../pages/tables/bootstrap/styling"
/* datatable tables */
import DatatableBasic from "../pages/tables/datatable/basic_init"
import DatatableSelectDelete from "../pages/tables/datatable/select_delete"
import FilterTable from "../pages/tables/datatable/filter"
import DatatableExport from "../pages/tables/datatable/data_export"
/* Bookmark */
import Bookmark from "../pages/bookmark"
/* calendar */
import Calendar from "../pages/calendar/fullcalendar"
/* Timeline */
import TimelineOne from "../pages/timeline/timeline_one"

/* vuejs smart table */
import SmartTable from "../pages/tables/vuejs_smart_table/basic"

/* Editor */
import SimpleEditor from "../pages/editor/simple_editor"
import CkEditor from "../pages/editor/ckeditor.vue"

/* User Profile */
import UserProfile from "../pages/users/profile"
import UserSettings from "../pages/users/settings"
import UserCards from "../pages/users/cards"

/* Blogs */
import Blog from "../pages/blogs/blog"
import BlogSingle from "../pages/blogs/blog_single"

/* Maps */
import GoogleMaps from "../pages/maps/vue_google_maps"
import VueLeaflet from "../pages/maps/vue_leaflet"

/* Job Search */
import JobList from "../pages/job/job_list"
import JobDetails from "../pages/job/job_details"
import JobApply from "../pages/job/job_apply"

/* Search */
import Search from "../pages/search"

/* Social App */
import Social from "../pages/social_app"

/* Authentication */
import LoginOne from "../pages/authentication/login_one"
import LoginTwo from "../pages/authentication/login_two"
import LoginValidate from "../pages/authentication/login_with_validation"
import RegisterImage from "../pages/authentication/register_image"
import RegisterImage2 from "../pages/authentication/register_image2"
import Unlock from "../pages/authentication/unlock"
import ForgetPassword from "../pages/authentication/forget_password"
import ResetPassword from "../pages/authentication/reset_password"

/* Learning */
import Learninglist from "../pages/learning/learninglist"
import Coursedetailed from "../pages/learning/coursedetailed"

/* knowledgebase */
import Knowledgebase from "../pages/knowledgebase/knowledgebase"

// Gallery
import GridGallery from "../pages/gallery/grid-gallery"
import GridGalleryDesc from "../pages/gallery/gallery-desc"
import GalleryMasonary from "../pages/gallery/masonary-gallery"
import GalleryMasonaryDesc from "../pages/gallery/masonary-desc"
import HoverEffect from "../pages/gallery/hover-effect"

/** Tasks */
import MyTasks from "../pages/tasks/my_tasks"
import TaskList from "../pages/tasks/task_list"
import MainMissions from "../pages/tasks/main_missions"

/* Scores */
import ScoreRegistration from "../pages/scores/scores_registration"
import ScoreSearch from "../pages/scores/scores_search"
import MyScores from "../pages/scores/my_scores"

/* events */
import Events from "../pages/events/events"
import CreateEvent from "../pages/events/event_create"
import MyEvents from "../pages/events/my_events"
import EventDetails from "../pages/events/event_details"
import EditEvent from "../pages/events/event_edit"

/** bounty */
import MyBounty from "../pages/bounty/my_bounty"
import BountyPub from "../pages/bounty/bounty_pub"
import LaunchBounty from "../pages/bounty/launch_bounty"
import BountyDetails from "../pages/bounty/bounty_details"
import EditBounty from "../pages/bounty/edit_bounty"

/** Proposals */
import ProposalList from "../pages/proposals/proposal_list"
import ProposalGenerator from "../pages/proposals/proposal_generator"
import ProposalDetails from "../pages/proposals/proposal_details"
import MyProposals from "../pages/proposals/my_proposals"

/** Governance */
import GovernanceGuide from "../pages/governance/governance_guide"
import GovernanceAdvices from "../pages/governance/governance_advices"
import SupervisoryComplaints from "../pages/governance/supervisory_complaints"

/** Education */
import LearningResources from "../pages/educations/learning_resources"
import CollaborationHandbook from "../pages/educations/collaboration_handbook"
import OperationCollege from "../pages/educations/operation_college"
import ProjectManagementClass from "../pages/educations/project_management_class"
import GovernanceEngineerBootcamp from "../pages/educations/governance_engineer_bootcamp"

/** Projects */
import ProjectList from "../pages/projects/project_list"
import MyProjects from "../pages/projects/my_projects"
import ProjectTeams from "../pages/projects/project_teams"
import ProjectEvents from "../pages/projects/project_events"
import ProjectGrants from "../pages/projects/project_grants"
import ProjectBranding from "../pages/projects/project_branding"
import ProjectPublicity from "../pages/projects/project_publicity"
import ProjectDetails from "../pages/projects/project_details"
import ProjectSettings from "../pages/projects/project_settings"
import ProjectGamify from "../pages/projects/project_gamify"

/** Guilds */
import GuildsOverview from "../pages/guilds/guilds_overview"
import GuildTreasury from "../pages/guilds/guild_treasury"
import GuildProjects from "../pages/guilds/guild_projects"
import GuildOnboarding from "../pages/guilds/guild_onboarding"
import GuildMembers from "../pages/guilds/guild_members"
import GuildEvents from "../pages/guilds/guild_events"
import GuildBudget from "../pages/guilds/guild_budget"
import GuildCoordination from "../pages/guilds/guild_coordination"
import GuildServices from "../pages/guilds/guild_services"
import GuildDetails from "../pages/guilds/guild_details"
import GuildSettings from "../pages/guilds/guild_settings"

/** City Hall */
import CityhallOverview from "../pages/cityhall/cityhall_overview"

import BudgetPlan from "../pages/cityhall/assets/budget_plan"
import ScoreReview from "../pages/cityhall/assets/score_review"
import SGNReview from "../pages/cityhall/assets/sgn_review"
import StableCoinsReview from "../pages/cityhall/assets/stablecoins_review"

import BusinessDevelopment from "../pages/cityhall/branding/business_development"
import CityContactsProgram from "../pages/cityhall/branding/city_contacts_program"
import MediaCenter from "../pages/cityhall/branding/media_center"
import CooperationDatabase from "../pages/cityhall/branding/cooperation_database"
import ImportantContacts from "../pages/cityhall/branding/important_contacts"

import CloudServices from "../pages/cityhall/infra/cloud_services"
import CollaborationTools from "../pages/cityhall/infra/collaboration_tools"
import DAOTools from "../pages/cityhall/infra/dao_tools"
import DataAndBackup from "../pages/cityhall/infra/data_and_backup"
import OnChainContracts from "../pages/cityhall/infra/onchain_contracts"
import PublicAccounts from "../pages/cityhall/infra/public_accounts"

import OnboardingMembers from "../pages/cityhall/onboarding/onboarding_members"
import OnboardingMentors from "../pages/cityhall/onboarding/onboarding_mentors"
import OnboardingTasks from "../pages/cityhall/onboarding/onboarding_tasks"
import OnboardingGovern from "../pages/cityhall/onboarding/onboarding_govern"
import OnboardingNews from "../pages/cityhall/onboarding/onboarding_news"


import AccountPermissions from "../pages/cityhall/permissions/account_permissions"
import ResourcePermissions from "../pages/cityhall/permissions/resource_permissions"
import EventPermissions from "../pages/cityhall/permissions/event_permissions"
import ProposalPermissions from "../pages/cityhall/permissions/proposal_permissions"
import GuildPermissions from "../pages/cityhall/permissions/guild_permissions"
import OSPermissions from "../pages/cityhall/permissions/os_permissions"
import ProjectPermissions from "../pages/cityhall/permissions/project_permissions"
import SBTPermissions from "../pages/cityhall/permissions/sbt_permissions"
import ScorePermissions from "../pages/cityhall/permissions/score_permissions"

import BrandLicensingReview from "../pages/cityhall/proposals/brand_licensing_review"
import MediaPublicityReview from "../pages/cityhall/proposals/media_publicity_review"
import ProposalVeto from "../pages/cityhall/proposals/proposal_veto"

import DocumentResources from "../pages/cityhall/resources/document_resources"
import ResourceLinks from "../pages/cityhall/resources/resource_links"
import MediaResources from "../pages/cityhall/resources/media_resources";

// component

Vue.use(Router)

const routes = [
  { path: "", redirect: { name: "dashboard" } },
  {
    path: "/dashboard",
    component: Body,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: "/",
        name: "dashboard",
        component: MemberDashboard // Default
      },
      {
        path: "guest",
        name: "guest",
        component: GuestDashobard,
      }
    ]
  },
  {
    path: "/terminal",
    component: Body,
    meta: {
      requiresAuth: false
    },
    children: [
      {
        path: "/",
        name: "Terminal",
        component: Terminal // Default
      }
    ]
  },
  {
    path: "/tasks",
    component: Body,
    redirect: "/tasks/",
    children: [
      {
        path: "my",
        name: "My-Tasks",
        component: MyTasks
      },
      {
        path: "/",
        name: "Task-List",
        component: TaskList
      },
      {
        path: "missions",
        name: "Main-Missions",
        component: MainMissions
      },
      {
        path: ":id/edit",
        name: "chart",
        component: EditEvent
      }
    ]
  },
  {
    path: "/scores",
    component: Body,
    redirect: "/search",
    children: [
      {
        path: "search",
        name: "Scores-Search",
        component: ScoreSearch
      },
      {
        path: "register",
        name: "ScoreRegistration",
        component: ScoreRegistration
      },
      {
        path: "my",
        name: "My-Scores",
        component: MyScores
      }
    ]
  },
  {
    path: "/events",
    component: Body,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Events",
        component: Events
      },
      {
        path: "create",
        name: "Events",
        component: CreateEvent
      },
      {
        path: "my",
        name: "My-Events",
        component: MyEvents
      },
      {
        path: ":id",
        name: "EventDetails",
        component: EventDetails
      },
      {
        path: ":id/edit",
        name: "chart",
        component: EditEvent
      }
    ]
  },
  {
    path: "/bounty",
    component: Body,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Bounty-Pub",
        component: BountyPub
      },
      {
        path: "launch",
        name: "Launch-Bounty",
        component: LaunchBounty
      },
      {
        path: "my",
        name: "My-Bounty",
        component: MyBounty
      },
      {
        path: ":id",
        name: "BountyDetails",
        component: BountyDetails
      },
      {
        path: ":id/edit",
        name: "Edit-Bounty",
        component: EditBounty
      }
    ]
  },
  {
    path: "/proposals",
    component: Body,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Proposal-List",
        component: ProposalList
      },
      {
        path: "generator",
        name: "Proposal-Generator",
        component: ProposalGenerator
      },
      {
        path: "my",
        name: "My-Proposals",
        component: MyProposals
      },
      {
        path: ":id",
        name: "Proposal-Details",
        component: ProposalDetails
      }
    ]
  },
  {
    path: "/governance",
    component: Body,
    redirect: "/governance/guide",
    children: [
      {
        path: "guide",
        name: "Governance-Guide",
        component: GovernanceGuide
      },
      {
        path: "advices",
        name: "Governance-Advices",
        component: GovernanceAdvices
      },
      {
        path: "complaints",
        name: "Supervisory-Complaints",
        component: SupervisoryComplaints
      }
    ]
  },
  {
    path: "/educations",
    component: Body,
    redirect: "/educations/learning-resources",
    children: [
      {
        path: "learning-resources",
        name: "Learning-Resources",
        component: LearningResources
      },
      {
        path: "collaboration-handbook",
        name: "Collaboration-Handbook",
        component: CollaborationHandbook
      },
      {
        path: "operation-college",
        name: "Operation-College",
        component: OperationCollege
      },
      {
        path: "project-management-class",
        name: "Project-Management-Class",
        component: ProjectManagementClass
      },
      {
        path: "governance-engineer-bootcamp",
        name: "Governance-Engineer-Bootcamp",
        component: GovernanceEngineerBootcamp
      }
    ]
  },
  {
    path: "/projects",
    component: Body,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Project-List",
        component: ProjectList
      },
      {
        path: "my",
        name: "My-Projects",
        component: MyProjects
      },
      {
        path: "gamify",
        name: "Project-Gamify",
        component: ProjectGamify
      },      
      {
        path: "teams",
        name: "Project-Teams",
        component: ProjectTeams
      },
      {
        path: "events",
        name: "Project-Events",
        component: ProjectEvents
      },
      {
        path: "grants",
        name: "Project-Grants",
        component: ProjectGrants
      },
      {
        path: "branding",
        name: "Project-Branding",
        component: ProjectBranding
      },
      {
        path: "publicity",
        name: "Project-Publicity",
        component: ProjectPublicity
      },
      {
        path: ":id",
        name: "Project-Details",
        component: ProjectDetails
      },
      {
        path: ":id/settings",
        name: "Project-Settings",
        component: ProjectSettings
      }
    ]
  },
  {
    path: "/guilds",
    component: Body,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Guilds-Overview",
        component: GuildsOverview
      },
      {
        path: "projects",
        name: "Guild-Projects",
        component: GuildProjects
      },
      {
        path: "onboarding",
        name: "Guild-Onboarding",
        component: GuildOnboarding
      },
      {
        path: "members",
        name: "Guild-Members",
        component: GuildMembers
      },
      {
        path: "events",
        name: "Guild-Events",
        component: GuildEvents
      },
      {
        path: "budget",
        name: "Guild-Budget",
        component: GuildBudget
      },
      {
        path: "coordination",
        name: "GuildCoordination",
        component: GuildCoordination
      },
      {
        path: "services",
        name: "Guild-Services",
        component: GuildServices
      },
      {
        path: "treasury",
        name: "Guild-Treasury",
        component: GuildTreasury
      },
      {
        path: ":id",
        name: "Guild-Details",
        component: GuildDetails
      },
      {
        path: ":id/settings",
        name: "Guild-Settings",
        component: GuildSettings
      }
    ]
  },
  {
    path: "/cityhall",
    component: Body,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "Cityhall-Overview",
        component: CityhallOverview
      },
      {
        path: "onboarding",
        name: "Onboarding",
        redirect: "/onboarding/members",
      },
      {
        path: "onboarding/members",
        name: "Onboarding-Members",
        component: OnboardingMembers
      },
      {
        path: "onboarding/tasks",
        name: "Onboarding-Tasks",
        component: OnboardingTasks
      },
      {
        path: "onboarding/govern",
        name: "Onboarding-Govern",
        component: OnboardingGovern
      },
      {
        path: "onboarding/news",
        name: "Onboarding-News",
        component: OnboardingNews
      },
      {
        path: "onboarding/mentors",
        name: "Onboarding-Mentors",
        component: OnboardingMentors
      },
      {
        path: "proposals",
        name: "Proposals",
        redirect: "/proposals/veto",
      },
      {
        path: "proposals/branding",
        name: "Brand-Licensing-Review",
        component: BrandLicensingReview
      },
      {
        path: "proposals/publicity",
        name: "Media-Publicity-Review",
        component: MediaPublicityReview
      },
      {
        path: "proposals/veto",
        name: "Proposal-Veto",
        component: ProposalVeto
      },
      {
        path: "assets",
        name: "Assets",
        redirect: "/assets/budget",
      },
      {
        path: "assets/budget",
        name: "Budget-Plan",
        component: BudgetPlan
      },
      {
        path: "assets/scr/review",
        name: "Score-Review",
        component: ScoreReview
      },
      {
        path: "assets/sgn/review",
        name: "SGN-Review",
        component: SGNReview
      },
      {
        path: "assets/stablecoins/review",
        name: "StableCoins-Review",
        component: StableCoinsReview
      },
      {
        path: "permissions",
        name: "Permissions",
        redirect: "/cityhall/permissions/sbt"
      },
      {
        path: "permissions/accounts",
        name: "Account-Permissions",
        component: AccountPermissions
      },
      {
        path: "permissions/resource",
        name: "Resource-Permissions",
        component: ResourcePermissions
      },
      {
        path: "permissions/events",
        name: "Event-Permissions",
        component: EventPermissions
      },
      {
        path: "permissions/proposals",
        name: "Proposal-Permissions",
        component: ProposalPermissions
      },
      {
        path: "permissions/guilds",
        name: "Guild-Permissions",
        component: GuildPermissions
      },
      {
        path: "permissions/os",
        name: "OS-Permissions",
        component: OSPermissions
      },
      {
        path: "permissions/projects",
        name: "Project-Permissions",
        component: ProjectPermissions
      },
      {
        path: "permissions/sbt",
        name: "SBT-Permissions",
        component: SBTPermissions
      },
      {
        path: "permissions/scores",
        name: "Score-Permissions",
        component: ScorePermissions
      },
      {
        path: "branding",
        name: "Branding",
        redirect: "/cityhall/branding/bd"
      },
      {
        path: "branding/bd",
        name: "Business-Development",
        component: BusinessDevelopment
      },
      {
        path: "branding/contacts",
        name: "Important-Contacts",
        component: ImportantContacts
      },
      {
        path: "branding/cooperation",
        name: "Cooperation-Database",
        component: CooperationDatabase
      },
      {
        path: "branding/city",
        name: "City-Contacts",
        component: CityContactsProgram
      },
      {
        path: "branding/media_center",
        name: "Media-Center",
        component: MediaCenter
      },
      {
        path: "resources",
        name: "Resources",
        redirect: "/cityhall/resources/documents"
      },
      {
        path: "resources/documents",
        name: "Document-Resources",
        component: DocumentResources
      },
      {
        path: "resources/links",
        name: "Resource-Links",
        component: ResourceLinks
      },
      {
        path: "resources/media",
        name: "Media-Resources",
        component: MediaResources
      },
      {
        path: "infra",
        name: "Infra",
        redirect: "/cityhall/infra/dao-tools",

      },
      {
        path: "infra/cloud",
        name: "Cloud-Services",
        component: CloudServices
      },
      {
        path: "infra/collaboration",
        name: "Collaboration-Tools",
        component: CollaborationTools
      },
      {
        path: "infra/dao-tools",
        name: "DAO-Tools",
        component: DAOTools
      },
      {
        path: "infra/contracts",
        name: "OnChain-Contracts",
        component: OnChainContracts
      },
      {
        path: "infra/accounts",
        name: "Public-Accounts",
        component: PublicAccounts
      },
      {
        path: "infra/backup",
        name: "Data-And-Backup",
        component: DataAndBackup
      },
      {
        path: "permissions",
        name: "Permissions",
        redirect: "/",
        children: [
          {
            path: "accounts",
            name: "Account-Permissions",
            component: AccountPermissions
          },
          {
            path: "events",
            name: "Event-Permissions",
            component: EventPermissions
          },
          {
            path: "proposals",
            name: "Proposal-Permissions",
            component: ProposalPermissions
          },
          {
            path: "resource",
            name: "Resource-Permissions",
            component: ResourcePermissions
          },
          {
            path: "guilds",
            name: "Guild-Permissions",
            component: GuildPermissions
          },
          {
            path: "os",
            name: "OS-Permissions",
            component: OSPermissions
          },
          {
            path: "projects",
            name: "Project-Permissions",
            component: ProjectPermissions
          },
          {
            path: "sbt",
            name: "SBT-Permissions",
            component: SBTPermissions
          },
          {
            path: "scores",
            name: "Score-Permissions",
            component: ScorePermissions
          }
        ]
      },
      {
        path: "proposals",
        name: "Proposals",
        redirect: "/",
        children: [
          {
            path: "branding",
            name: "Brand-Licensing-Review",
            component: BrandLicensingReview
          },
          {
            path: "publicity",
            name: "Media-Publicity-Review",
            component: MediaPublicityReview
          },
          {
            path: "veto",
            name: "Proposal-Veto",
            component: ProposalVeto
          },
        ]
      },
    ]
  },
  {
    path: "/console",
    component: Body,
    children: [
      {
        path: "metaforo",
        name: "MetaforoConsole",
        component: MetaforoConsole,
      }
    ]
  },
  {
    path: "/widgets",
    component: Body,
    children: [
      {
        path: "general",
        name: "general",
        component: GeneralWidgets,
        meta: {
          title: "General Widgets | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "chart",
        name: "chart",
        component: ChartWidgets,
        meta: {
          title: "Chart Widgets | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/project",
    component: Body,
    children: [
      {
        path: "projectlist",
        name: "project-list",
        component: projectlist,
        meta: {
          title: "Project List | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "create-project",
        name: "create-project",
        component: createproject,
        meta: {
          title: "Create Project | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/uikits",
    component: Body,
    children: [
      {
        path: "alert",
        name: "alert",
        component: alert,
        meta: {
          title: "Alert | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "helper-classes",
        name: "Helperclasses",
        component: Helperclasses,
        meta: {
          title: "Helperclasses | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "avatars",
        name: "Avatars",
        component: Avatars,
        meta: {
          title: "Avatars | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "grid",
        name: "Grid",
        component: Grid,
        meta: {
          title: "Grid | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "tag-pills",
        name: "Tagpills",
        component: Tagpills,
        meta: {
          title: "Tagpills | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
        meta: {
          title: "Typography | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "progress-bar",
        name: "Progressbar",
        component: Progressbar,
        meta: {
          title: "Progressbar | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "modal",
        name: "Modal",
        component: Modal,
        meta: {
          title: "Modal | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "popover",
        name: "Popover",
        component: Popover,
        meta: {
          title: "Popover | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "tooltip",
        name: "Tooltip",
        component: Tooltip,
        meta: {
          title: "Tooltip | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "loader",
        name: "Spinners",
        component: Spinners,
        meta: {
          title: "Spinners | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "dropdown",
        name: "Dropdown",
        component: Dropdown,
        meta: {
          title: "Dropdown | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "accordion",
        name: "Accordion",
        component: Accordion,
        meta: {
          title: "Accordion | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "box-shadow",
        name: "Boxshadow",
        component: Boxshadow,
        meta: {
          title: "Boxshadow | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "lists",
        name: "Lists",
        component: Lists,
        meta: {
          title: "Lists | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/advance",
    component: Body,
    children: [
      {
        path: "scrollable",
        name: "Scrollable",
        component: Scrollable,
        meta: {
          title: "Scrollable | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "sweetalert",
        name: "Sweetalert",
        component: Sweetalert,
        meta: {
          title: "Sweetalert | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "tree",
        name: "Tree",
        component: Tree,
        meta: {
          title: "Tree | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "rating",
        name: "Rating",
        component: Rating,
        meta: {
          title: "Rating | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "pagination",
        name: "Pagination",
        component: Pagination,
        meta: {
          title: "Pagination | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "ribbons",
        name: "Ribbons",
        component: Ribbons,
        meta: {
          title: "Ribbons | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "tour",
        name: "Tour",
        component: Tour,
        meta: {
          title: "Tour | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "range-slider",
        name: "Rangeslider",
        component: Rangeslider,
        meta: {
          title: "Rangeslider | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "breadcrumb",
        name: "Breadcrumb",
        component: Breadcrumb,
        meta: {
          title: "Breadcrumb | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "upload",
        name: "Upload",
        component: Upload,
        meta: {
          title: "Upload | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "sticky",
        name: "Sticky",
        component: Sticky,
        meta: {
          title: "Sticky | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "toastr",
        name: "Toastr",
        component: Toastr,
        meta: {
          title: "Toastr | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "image-cropper",
        name: "ImageCropper",
        component: ImageCropper,
        meta: {
          title: "ImageCropper | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "dragdrop",
        name: "Draganddrop",
        component: Draganddrop,
        meta: {
          title: "Draganddrop | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/chart",
    component: Body,
    children: [
      {
        path: "google",
        name: "Google Chart",
        component: GoogleChart,
        meta: {
          title: "GoogleChart | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "chartist",
        name: "Chartist",
        component: Chartist,
        meta: {
          title: "Chartist | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "apexchart",
        name: "ApexChart",
        component: ApexChart,
        meta: {
          title: "ApexChart | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/gallery",
    component: Body,
    children: [
      {
        path: "grid-gallery",
        name: "GridGallery",
        component: GridGallery,
        meta: {
          title: "GridGallery | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "gallery-desc",
        name: "GridGalleryDesc",
        component: GridGalleryDesc,
        meta: {
          title: "GridGalleryDesc | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "gallery-masonary",
        name: "GalleryMasonary",
        component: GalleryMasonary,
        meta: {
          title: "GalleryMasonary | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "gallery-masonary-desc",
        name: "GalleryMasonaryDesc",
        component: GalleryMasonaryDesc
      },
      {
        path: "hover-effect",
        name: "HoverEffect",
        component: HoverEffect,
        meta: {
          title: "HoverEffect | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/editor",
    component: Body,
    children: [
      {
        path: "simple-editor",
        name: "SimpleEditor",
        component: SimpleEditor,
        meta: {
          title: "SimpleEditor | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "ck-editor",
        name: "CkEditor",
        component: CkEditor,
        meta: {
          title: "CkEditor | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/my",
    component: Body,
    redirect: "/my/profile",
    children: [
      {
        path: "profile",
        name: "UserProfile",
        component: UserProfile
      },
      {
        path: "settings",
        name: "UserSettings",
        component: UserSettings
      },
      {
        path: "cards",
        name: "UserCards",
        component: UserCards,
        meta: {
          title: "serCards | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/blog",
    component: Body,
    children: [
      {
        path: "details",
        name: "Blog",
        component: Blog,
        meta: {
          title: "log | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "single",
        name: "BlogSingle",
        component: BlogSingle,
        meta: {
          title: "logSingle | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/maps",
    component: Body,
    children: [
      {
        path: "vue-google-maps",
        name: "GoogleMaps",
        component: GoogleMaps,
        meta: {
          title: "oogleMaps | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "vue-leaflet-maps",
        name: "VueLeaflet",
        component: VueLeaflet,
        meta: {
          title: "ueLeaflet | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/icons",
    component: Body,
    children: [
      {
        path: "flag",
        name: "Flag",
        component: Flag,
        meta: {
          title: "Flag | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "ico",
        name: "Ico",
        component: Ico,
        meta: {
          title: "Ico | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "themify",
        name: "Themify",
        component: Themify,
        meta: {
          title: "Themify | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "fontawesome",
        name: "Fontawesome",
        component: Fontawesome,
        meta: {
          title: "Fontawesome | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "feather_icon",
        name: "FeatherIcon",
        component: FeatherIcon,
        meta: {
          title: "FeatherIcon | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "whether",
        name: "WhetherIcon",
        component: WhetherIcon,
        meta: {
          title: "WhetherIcon | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/form",
    component: Body,
    children: [
      {
        path: "wizard",
        name: "FormWizard",
        component: FormWizrd,
        meta: {
          title: "FormWizrd | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "validation",
        name: "FormValidation",
        component: FormValidation,
        meta: {
          title: "FormValidation | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "inputs",
        name: "FormBaseInputs",
        component: FormBaseInputs,
        meta: {
          title: "FormBaseInputs | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "checkbox-radio",
        name: "FormCheckboxRadio",
        component: FormCheckboxRadio,
        meta: {
          title: "FormCheckboxRadio | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "input-groups",
        name: "FormInputGroups",
        component: FormInputGroups,
        meta: {
          title: "FormInputGroups | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "mega-options",
        name: "FormMegaOptions",
        component: FormMegaOptions,
        meta: {
          title: "FormMegaOptions | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "datepicker",
        name: "FormDatepicker",
        component: FormDatepicker,
        meta: {
          title: "FormDatepicker | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "select2",
        name: "FormSelect2",
        component: FormSelect2,
        meta: {
          title: "FormSelect2 | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "switch",
        name: "FormSwitch",
        component: FormSwitch,
        meta: {
          title: "FormSwitch | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "typeahead",
        name: "FormTypeahead",
        component: FormTypeahead,
        meta: {
          title: "FormTypeahead | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "clipboard",
        name: "FormClipboard",
        component: FormClipboard,
        meta: {
          title: "FormClipboard | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "touchspin",
        name: "FormTouchspin",
        component: FormTouchspin,
        meta: {
          title: "FormTouchspin | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "mega-options",
        name: "Form Mega Options",
        component: FormMegaOptions,
        meta: {
          title: "FormMegaOptions | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/table",
    component: Body,
    children: [
      {
        path: "basic",
        name: "BootstrapBasic",
        component: BootstrapBasic,
        meta: {
          title: "BootstrapBasic | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "sizing",
        name: "BootstrapSizing",
        component: BootstrapSizing,
        meta: {
          title: "BootstrapSizing | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "border",
        name: "BootstrapBorder",
        component: BootstrapBorder,
        meta: {
          title: "BootstrapBorder | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "styling",
        name: "BootstrapStyling",
        component: BootstrapStyling,
        meta: {
          title: "BootstrapStyling | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/datatable-basic",
        name: "DatatableBasic",
        component: DatatableBasic,
        meta: {
          title: "DatatableBasic | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/datatable-select-delete",
        name: "DatatableSelectDelete",
        component: DatatableSelectDelete,
        meta: {
          title: "DatatableSelectDelete | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/filter-table",
        name: "FilterTable",
        component: FilterTable,
        meta: {
          title: "FilterTable | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/datatable-export",
        name: "DatatableExport",
        component: DatatableExport,
        meta: {
          title: "DatatableExport | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "smarttable",
        name: "SmartTable",
        component: SmartTable,
        meta: {
          title: "SmartTable | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/buttons",
    component: Body,
    children: [
      {
        path: "default",
        name: "default_buttons",
        component: Default_buttons,
        meta: {
          title: "Default_buttons | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "flat",
        name: "flat_buttons",
        component: Flat_buttons,
        meta: {
          title: "Flat_buttons | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "edge",
        name: "edge_buttons",
        component: Edge_buttons,
        meta: {
          title: "Edge_buttons | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "raised",
        name: "raised_buttons",
        component: Raised_buttons,
        meta: {
          title: "Raised_buttons | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "group",
        name: "group_buttons",
        component: Group_buttons,
        meta: {
          title: "Group_buttons | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/ecommerce",
    component: Body,
    children: [
      {
        path: "product",
        name: "Product",
        component: Products,
        meta: {
          title: "Products | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "details/:id",
        name: "Product Details",
        component: ProductDetails,
        meta: {
          title: "ProductDetails | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "cart",
        name: "Cart",
        component: Cart,
        meta: {
          title: "Cart | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "wishlist",
        name: "Wishlist",
        component: Wishlist,
        meta: {
          title: "Wishlist | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "checkout",
        name: "Checkout",
        component: Checkout,
        meta: {
          title: "Checkout | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "invoice",
        name: "Invoice",
        component: Invoice,
        meta: {
          title: "Invoice | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "success",
        name: "Success",
        component: Success,
        meta: {
          title: "Success | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "order/history",
        name: "Order History",
        component: OrderHistory,
        meta: {
          title: "OrderHistory | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "payment/details",
        name: "payment Details",
        component: PaymentDetails,
        meta: {
          title: "PaymentDetails | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/cards",
    component: Body,
    children: [
      {
        path: "basic",
        name: "Basic",
        component: Basic,
        meta: {
          title: "BootstrapStyling | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "creative",
        name: "Creative",
        component: Creative,
        meta: {
          title: "Creative | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "tabbed",
        name: "Tabbed",
        component: Tabbed,
        meta: {
          title: "Tabbed | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "draggable",
        name: "Draggable",
        component: Draggable,
        meta: {
          title: "Draggable | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/app",
    component: Body,
    children: [
      {
        path: "todo",
        name: "todo",
        component: Todo,
        meta: {
          title: "Todo | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "firebase-todo",
        name: "FirebaseTodo",
        component: FirebaseTodo,
        meta: {
          title: "FirebaseTodo | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "chat",
        name: "chat",
        component: Chat,
        meta: {
          title: "Chat | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "videochat",
        name: "Video chat",
        component: Videochat,
        meta: {
          title: "Video Chat | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "email",
        name: "Email",
        component: Email,
        meta: {
          title: "Email, | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "filemanager",
        name: "File Manager",
        component: FileManager,
        meta: {
          title: "File Manager, | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "kanban",
        name: "Kanban Board",
        component: Kanban,
        meta: {
          title: "Kanban Board, | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "bookmark",
        name: "Bookmark",
        component: Bookmark,
        meta: {
          title: "Bookmark | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "calendar",
        name: "Calendar",
        component: Calendar,
        meta: {
          title: "Calendar | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/timeline",
    component: Body,
    children: [
      {
        path: "one",
        name: "TimelineOne",
        component: TimelineOne,
        meta: {
          title: "TimelineOne | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/auth",
    component: Auth,
    children: [
      {
        path: "login",
        name: "Login 1",
        component: login,
        meta: {
          title: " login | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "register",
        name: "register 1",
        component: Register,
        meta: {
          title: " Register | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/pages",
    component: Body,
    children: [
      {
        path: "/pages/sample-page",
        name: "SamplePage",
        component: SamplePage,
        meta: {
          title: "SamplePage | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/pages/pricing",
        name: "Pricing",
        component: Pricing,
        meta: {
          title: "Pricing | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/callback",
    name: "callback",
    component: callback,
    meta: {
      title: "Auth0"
    }
  },
  {
    path: "/pages",
    component: Body,
    children: [
      {
        path: "/pages/faq",
        name: "Faq",
        component: Faq,
        meta: {
          title: "Faq | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/pages/support",
        name: "Support",
        component: Support,
        meta: {
          title: "Support | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/pages/social-app",
        name: "Social",
        component: Social,
        meta: {
          title: "Social | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/job",
    component: Body,
    children: [
      {
        path: "/job/list",
        name: "JobList",
        component: JobList,
        meta: {
          title: "JobList | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/job/details/:id",
        name: "JobDetails",
        component: JobDetails,
        meta: {
          title: "JobDetails, | SeeDAO - Premium Admin Template"
        },
        props: true
      },
      {
        path: "/job/apply/:id",
        name: "JobApply",
        component: JobApply,
        meta: {
          title: "JobApply, | SeeDAO - Premium Admin Template"
        },
        props: true
      }
    ]
  },
  {
    path: "/search",
    component: Body,
    children: [
      {
        path: "/pages/search",
        name: "Search",
        component: Search,
        meta: {
          title: "Search | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/learning",
    component: Body,
    children: [
      {
        path: "/learning/list",
        name: "Learninglist",
        component: Learninglist,
        meta: {
          title: "Learninglist | SeeDAO - Premium Admin Template"
        }
      },
      {
        path: "/learning/details/:id",
        name: "Coursedetailed",
        component: Coursedetailed,
        meta: {
          title: "Coursedetailed, | SeeDAO - Premium Admin Template"
        },
        props: true
      }
    ]
  },
  {
    path: "/knowledgebase",
    component: Body,
    children: [
      {
        path: "/",
        name: "Knowledgebase",
        component: Knowledgebase,
        meta: {
          title: "Knowledgebase | SeeDAO - Premium Admin Template"
        }
      }
    ]
  },
  {
    path: "/error-400",
    name: "Error400",
    component: Error400,
    meta: {
      title: "Error400 | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/error-401",
    name: "Error401",
    component: Error401,
    meta: {
      title: "Error401 | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/error-403",
    name: "Error403",
    component: Error403,
    meta: {
      title: "Error403 | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/error-404",
    name: "Error404",
    component: Error404,
    meta: {
      title: "Error404 | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/error-500",
    name: "Error500",
    component: Error500,
    meta: {
      title: "Error500 | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/error-503",
    name: "Error503",
    component: Error503,
    meta: {
      title: "Error503 | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/maintenance",
    name: "Maintenance",
    component: Maintenance,
    meta: {
      title: "Maintenance | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/comingsoon/comingsoon-simple",
    name: "ComingsoonSimple",
    component: ComingsoonSimple,
    meta: {
      title: "ComingsoonSimple | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/comingsoon/comingsoon-image",
    name: "ComingsoonImage",
    component: ComingsoonImage,
    meta: {
      title: "ComingsoonImage | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/comingsoon/comingsoon-video",
    name: "ComingsoonVideo",
    component: ComingsoonVideo,
    meta: {
      title: "ComingsoonVideo | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/login/one",
    name: "LoginOne",
    component: LoginOne,
    meta: {
      title: "LoginOne | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/login/two",
    name: "LoginTwo",
    component: LoginTwo,
    meta: {
      title: "LoginTwo | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/login/validate",
    name: "LoginValidate",
    component: LoginValidate,
    meta: {
      title: "LoginValidate | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/register/image",
    name: "RegisterImage",
    component: RegisterImage,
    meta: {
      title: "RegisterImage | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/register/image2",
    name: "RegisterImage2",
    component: RegisterImage2,
    meta: {
      title: "RegisterImage2 | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/unlockuser",
    name: "Unlock",
    component: Unlock,
    meta: {
      title: "Unlock | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/forgetpassword",
    name: "ForgetPassword",
    component: ForgetPassword,
    meta: {
      title: "ForgetPassword | SeeDAO - Premium Admin Template"
    }
  },
  {
    path: "/authentication/resetpassword",
    name: "ResetPassword",
    component: ResetPassword,
    meta: {
      title: "ResetPassword | SeeDAO - Premium Admin Template"
    }
  }
]

const router = new Router({
  routes,
  base: process.env.BASE_URL,
  mode: "history",
  linkActiveClass: "active",
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   firebase.auth().onAuthStateChanged(() => {
//     if(to.meta.title)
//       document.title = to.meta.title;
//     const CurrentUser = firebase.auth().currentUser;
//     const  path = ['/auth/login','/auth/register'];
//     if (path.includes(to.path) || to.path === '/callback' || CurrentUser || Userauth.isAuthenticatedUser()){
//       return next();
//     }
//     next('/auth/login');
//   });
// });

export default router
