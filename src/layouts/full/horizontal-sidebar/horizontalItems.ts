export default [
  {
    group: "/dashboards",
    model: false,
    icon: "home",
    title: "Dashboards",
    class: "two-column",
    to: "/dashboards",
    children: [
      {
        title: "Analytical",
        icon: "mdi mdi-adjust",
        to: "/dashboards/analytical",
      },
      {
        title: "eCommerce",
        icon: "mdi mdi-adjust",
        to: "/dashboards/ecommerce",
      },
      {
        title: "Modern",
        icon: "mdi mdi-adjust",
        to: "/dashboards/modern",
      },
    ],
  },

  {
    group: "/apps",
    model: false,
    icon: "inbox",
    title: "Apps",
    to: "/apps",
    children: [
      {
        icon: "mdi mdi-comment-outline",
        title: "Chat",
        to: "/apps/chat",
      },

      {
        icon: "mdi mdi-calendar",
        title: "Calendar",
        to: "/apps/fullcalendar",
      },
      {
        icon: "mdi mdi-shopping",
        title: "Ecommerce-Shop",
        to: "/apps/shop",
      },
      {
        icon: "mdi mdi-phone",
        title: "Contact List",
        to: "/apps/contact-list",
      },
      {
        icon: "mdi mdi-phone-voip",
        title: "Contact Grid",
        to: "/apps/contact-grid",
      },
      {
        icon: "mdi mdi-playlist-plus",
        title: "Todo",
        to: "/apps/todo",
      },
    ],
  },

  {
    group: "/uicomponents",
    model: false,
    icon: "grid",
    title: "Ui",
    extraclass: "mega-dropdown",
    to: "/ui-components",
    children: [
      {
        title: "Alerts",
        icon: "mdi mdi-alert",
        to: "/ui-components/alert",
      },
      {
        title: "Avatar",
        icon: "mdi mdi-account-circle",
        to: "/ui-components/avatar",
      },
      {
        title: "Badge",
        icon: "mdi mdi-relative-scale",
        to: "/ui-components/badge",
      },
      {
        title: "Banner",
        icon: "mdi mdi-box-shadow",
        to: "/ui-components/banner",
      },
      {
        title: "Appbar",
        icon: "mdi mdi-arrange-bring-to-front",
        to: "/ui-components/appbar",
      },
      {
        title: "Toolbar",
        icon: "mdi mdi-table-column-plus-after",
        to: "/ui-components/toolbar",
      },
      {
        title: "Systembar",
        icon: "mdi mdi-format-float-left",
        to: "/ui-components/systembar",
      },
      {
        title: "Breadcrumb",
        icon: "mdi mdi-equal",
        to: "/ui-components/breadcrumb",
      },
      {
        title: "Buttons",
        icon: "mdi mdi-toggle-switch",
        to: "/ui-components/buttons",
      },
      {
        title: "Cards",
        icon: "mdi mdi-cards-outline",
        to: "/ui-components/cards",
      },
      {
        title: "Carousel",
        icon: "mdi mdi-view-carousel",
        to: "/ui-components/carousel",
      },
      {
        title: "Chips",
        icon: "mdi mdi-checkbox-multiple-blank-outline",
        to: "/ui-components/chips",
      },
      {
        title: "Dialogs",
        icon: "mdi mdi-tablet",
        to: "/ui-components/dialogs",
      },
      {
        title: "Dividers",
        icon: "mdi mdi-bandcamp",
        to: "/ui-components/dividers",
      },
      {
        title: "Expansion Panel",
        icon: "mdi mdi-credit-card-multiple",
        to: "/ui-components/expansionpanel",
      },
      {
        title: "Footer",
        icon: "mdi mdi-view-agenda",
        to: "/ui-components/footer",
      },
      {
        title: "Grids",
        icon: "mdi mdi-grid",
        to: "/ui-components/grids",
      },
      {
        title: "Button Group",
        icon: "mdi mdi-hexagon-multiple",
        to: "/ui-components/button-group",
      },
      {
        title: "Chip Group",
        icon: "mdi mdi-image-filter-vintage",
        to: "/ui-components/chip-group",
      },
      {
        title: "Item Group",
        icon: "mdi mdi-layers",
        to: "/ui-components/item-group",
      },
      {
        title: "Slide Group",
        icon: "mdi mdi-recycle",
        to: "/ui-components/slide-group",
      },
      {
        title: "Images",
        icon: "mdi mdi-image-area",
        to: "/ui-components/images",
      },

      {
        title: "Menus",
        icon: "mdi mdi-launch",
        to: "/ui-components/menus",
      },
      {
        title: "Navigation Drawers",
        icon: "mdi mdi-image-broken-variant",
        to: "/ui-components/navigation-drawers",
      },
      {
        title: "Pagination",
        icon: "mdi mdi-book-open-variant",
        to: "/ui-components/pagination",
      },
      {
        title: "Progress Circular",
        icon: "mdi mdi-compass",
        to: "/ui-components/progress-circular",
      },
      {
        title: "Progress Linear",
        icon: "mdi mdi-crosshairs",
        to: "/ui-components/progress-linear",
      },
      {
        title: "Rating",
        icon: "mdi mdi-star-circle",
        to: "/ui-components/rating",
      },
      {
        title: "Tabs",
        icon: "mdi mdi-sort-variant",
        to: "/ui-components/tabs",
      },
      {
        title: "Timeline",
        icon: "mdi mdi-clock-end",
        to: "/ui-components/timeline",
      },
      {
        title: "Tooltips",
        icon: "mdi mdi-image-filter-vintage",
        to: "/ui-components/tooltips",
      },
      {
        title: "Flex",
        icon: "mdi mdi-application",
        to: "/style-animation/flex",
      },
      {
        title: "Elevation",
        icon: "mdi mdi-assistant",
        to: "/style-animation/levation",
      },
      {
        title: "Spacing",
        icon: "mdi mdi-bridge",
        to: "/style-animation/spacing",
      },
      {
        title: "Text and Typography",
        icon: "mdi mdi-bowling",
        to: "/style-animation/text-typography",
      },
      {
        title: "Transitions",
        icon: "mdi mdi-text-shadow",
        to: "/style-animation/transitions",
      },
    ],
  },

  {
    group: "/charts",
    model: false,
    icon: "bar-chart-2",
    title: "Charts",
    to: "/charts/apexcharts",
  },

  {
    group: "/form-elements",
    model: false,
    icon: "file-text",
    title: "Forms",
    extraclass: "two-column",
    to: "/form-elements",
    children: [
      {
        title: "Autocompletes",
        icon: "mdi mdi-priority-low",
        to: "/form-elements/feautocompletes",
      },
      {
        title: "Combobox",
        icon: "mdi mdi-rounded-corner",
        to: "/form-elements/fecombobox",
      },
      {
        title: "File Inputs",
        icon: "mdi mdi-select-all",
        to: "/form-elements/fefileinputs",
      },
      {
        title: "Inputs",
        icon: "mdi mdi-shape-plus",
        to: "/form-elements/feinputs",
      },
      {
        title: "Selection Controls",
        icon: "mdi mdi-relative-scale",
        to: "/form-elements/feselectioncontrols",
      },
      {
        title: "Selects",
        icon: "mdi mdi-tab-unselected",
        to: "/form-elements/feselects",
      },
      {
        title: "Sliders",
        icon: "mdi mdi-vector-difference-ba",
        to: "/form-elements/fesliders",
      },
      {
        title: "Textareas",
        icon: "mdi mdi-code-greater-than",
        to: "/form-elements/fetextareas",
      },
      {
        title: "Textfields",
        icon: "mdi mdi-border-vertical",
        to: "/form-elements/fetextfields",
      },

      {
        title: "Form Action",
        icon: "mdi mdi-code-equal",
        to: "/form-layouts/flformaction",
      },
      {
        title: "Form Basic",
        icon: "mdi mdi-content-duplicate",
        to: "/form-layouts/flformbasic",
      },
      {
        title: "Form Horizontal",
        icon: "mdi mdi-cards-variant",
        to: "/form-layouts/flformhorizontal",
      },
      {
        title: "Custom Cards",
        icon: "mdi mdi-cards-variant",
        to: "/widgets/custom-cards",
      },
    ],
  },

  {
    group: "/tables",
    model: false,
    icon: "layout",
    title: "Tables",
    to: "/tables",
    children: [
      {
        title: "Simple Table",
        icon: "mdi mdi-table",
        to: "/tables",
      },
      {
        title: "Editable Table",
        icon: "mdi mdi-table-edit",
        to: "/editable-table",
      },
    ],
  },

  {
    group: "/extra",
    model: false,
    icon: "layers",
    title: "Extra",
    to: "/icons",
    children: [
      {
        title: "Boxed Login",
        icon: "mdi mdi-account-key",
        to: "/authentication/boxedlogin",
      },
      {
        title: "Login",
        icon: "mdi mdi-account-key",
        to: "/authentication/fulllogin",
      },
      {
        title: "Boxed Register",
        icon: "mdi mdi-account-plus",
        to: "/authentication/boxedregister",
      },
      {
        title: "Register",
        icon: "mdi mdi-account-plus",
        to: "/authentication/fullregister",
      },
      {
        title: "Error",
        icon: "mdi mdi-alert-outline",
        to: "/authentication/error",
      },
      {
        title: "Material",
        icon: "mdi mdi-emoticon",
        to: "/icons/material",
      },
      {
        title: "Feather",
        icon: "mdi mdi-emoticon-cool",
        to: "/icons/feather",
      },
    ],
  },
];
