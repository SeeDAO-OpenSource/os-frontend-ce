<template>
  <div>
    <Breadcrumbs main="Icons" title="Flag Icons" />

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h5 class="m-b-0">Flag Icons</h5>
            </div>
            <div class="card-body">
              <div class="row icon-lists flag-icons">
                <div
                  class="col-12 col-sm-6 col-xl-4"
                  v-for="(fi,index) in flag_icons"
                  :key="index"
                  v-on:click="icon_bar(fi.abbrivation)"
                >
                  <div class="media">
                    <i class="flag-icon" :class="'flag-icon-'+fi.abbrivation"></i>
                    <div class="media-body align-self-center">
                      <h5 v-text="fi.abbrivation"></h5>
                      <h6 class="mt-0" v-text="fi.name"></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="icon-hover-bottom p-fixed fa-fa-icon-show-div"
      :class="{ 'opecity-0' : !icon_bar_status }"
      :style="[icon_bar_status ? {'display':'block'} : { 'display':'none'} ]"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="icon-popup">
            <div class="close-icon" v-on:click="close_icon_bar">
              <i class="icofont icofont-close"></i>
            </div>
            <div class="icon-first">
              <i class="fa-2x" :class="[ select_icon.class ]"></i>
            </div>
            <div class="icon-class">
              <label class="icon-title">Class</label>
              <span v-text="select_icon.class">icon-drupal</span>
            </div>
            <div class="icon-last icon-last">
              <label class="icon-title">Markup</label>
              <div class="form-inline">
                <div class="form-group">
                  <input
                    class="inp-val form-control m-r-10"
                    type="text"
                    ref="copy_text"
                    :value="select_icon.tag"
                    readonly="readonly"
                  />
                  <button class="btn btn-primary notification" v-on:click="copy_icon">Copy text</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

        icon_bar_status:false,

        select_icon:{
          class:'',
          tag:''
        },

        flag_icons : [{ abbrivation: 'in', name: 'India Flag' }, { abbrivation: 'ad', name: 'Andorra Flag' }, { abbrivation: 'ae', name: 'United Arab Emirates Flag' },
                      { abbrivation: 'af', name: 'Afghanistan Flag' }, { abbrivation: 'ag', name: 'Antigua and Barbuda Flag' }, { abbrivation: 'ai', name: 'Anguilla Flag' },
                      { abbrivation: 'al', name: 'Albania Flag' }, { abbrivation: 'am', name: 'Armenia Flag' }, { abbrivation: 'ao', name: 'Angola Flag' },
                      { abbrivation: 'ar', name: 'Argentina Flag' }, { abbrivation: 'as', name: 'American Samoa Flag' }, { abbrivation: 'at', name: 'Austria Flag' },
                      { abbrivation: 'au', name: 'Australia Flag' }, { abbrivation: 'aw', name: 'Aruba Flag' }, { abbrivation: 'ax', name: 'Aland Islands Flag' },
                      { abbrivation: 'az', name: 'Azerbaijan Flag' }, { abbrivation: 'ba', name: 'Bosnia and Herzegovina Flag' }, { abbrivation: 'bb', name: 'Barbados Flag' },
                      { abbrivation: 'bd', name: 'Bangladesh Flag' }, { abbrivation: 'be', name: 'Belgium Flag' }, { abbrivation: 'bf', name: 'Burkina Faso Flag' },
                      { abbrivation: 'bg', name: 'Bulgaria Flag' }, { abbrivation: 'bh', name: 'Bahrain Flag' }, { abbrivation: 'bi', name: 'Burundi Flag' },
                      { abbrivation: 'bj', name: 'Benin Flag' }, { abbrivation: 'bl', name: 'Saint Barthélemy Flag' }, { abbrivation: 'bm', name: 'Bermuda Flag' },
                      { abbrivation: 'bn', name: 'Brunei Darussalam Flag' }, { abbrivation: 'bo', name: 'Bolivia (Plurinational State of) Flag' }, { abbrivation: 'bq', name: 'Bonaire, Sint Eustatius and Saba Flag' },
                      { abbrivation: 'br', name: 'Brazil Flag' }, { abbrivation: 'bs', name: 'Bahamas Flag' }, { abbrivation: 'bt', name: 'Bhutan Flag' },
                      { abbrivation: 'bw', name: 'Botswana Flag' }, { abbrivation: 'by', name: 'Belarus Flag' }, { abbrivation: 'bz', name: 'Belize Flag' },
                      { abbrivation: 'ca', name: 'Canada Flag' }, { abbrivation: 'cc', name: 'Cocos (Keeling) Islands Flag' }, { abbrivation: 'cd', name: 'Democratic Republic of the Congo Flag' },
                      { abbrivation: 'cf', name: 'Central African Republic Flag' }, { abbrivation: 'cg', name: 'Republic of the Congo Flag' }, { abbrivation: 'ch', name: 'Switzerland Flag' },
                      { abbrivation: 'ci', name: 'Côte d Ivoire Flag' }, { abbrivation: 'ck', name: 'Cook Islands Flag' }, { abbrivation: 'cl', name: 'Chile Flag' },
                      { abbrivation: 'cm', name: 'Cameroon Flag' }, { abbrivation: 'cn', name: 'China Flag' }, { abbrivation: 'co', name: 'Colombia Flag' },
                      { abbrivation: 'cr', name: 'Costa Rica Flag' }, { abbrivation: 'cu', name: 'Cuba Flag' }, { abbrivation: 'cv', name: 'Cabo Verde Flag' },
                      { abbrivation: 'cw', name: 'Curaçao Flag' }, { abbrivation: 'cx', name: 'Christmas Island Flag' }, { abbrivation: 'cy', name: 'Cyprus Flag' },
                      { abbrivation: 'cz', name: 'Czech Republic Flag' }, { abbrivation: 'de', name: 'Germany Flag' }, { abbrivation: 'dj', name: 'Djibouti Flag' },
                      { abbrivation: 'dk', name: 'Denmark Flag' }, { abbrivation: 'dm', name: 'Dominica Flag' }, { abbrivation: 'do', name: 'Dominican Republic Flag' },
                      { abbrivation: 'dz', name: 'Algeria Flag' }, { abbrivation: 'ec', name: 'Ecuador Flag' }, { abbrivation: 'ee', name: 'Estonia Flag' },
                      { abbrivation: 'eg', name: 'Egypt Flag' }, { abbrivation: 'eh', name: 'Western Sahara Flag' }, { abbrivation: 'er', name: 'Eritrea Flag' },
                      { abbrivation: 'es', name: 'Spain Flag' }, { abbrivation: 'et', name: 'Ethiopia Flag' }, { abbrivation: 'fi', name: 'Finland Flag' },
                      { abbrivation: 'fj', name: 'Fiji Flag' }, { abbrivation: 'fk', name: 'Falkland Islands Flag' }, { abbrivation: 'fm', name: 'Federated States of Micronesia Flag' },
                      { abbrivation: 'fo', name: 'Faroe Islands Flag' }, { abbrivation: 'fr', name: 'France Flag' }, { abbrivation: 'ga', name: 'Gabon Flag' },
                      { abbrivation: 'gb', name: 'United Kingdom Flag' }, { abbrivation: 'gd', name: 'Grenada Flag' }, { abbrivation: 'ge', name: 'Georgia Flag' },
                      { abbrivation: 'gf', name: 'French Guiana Flag' }, { abbrivation: 'gg', name: 'Guernsey Flag' }, { abbrivation: 'gh', name: 'Ghana Flag' },
                      { abbrivation: 'gi', name: 'Gibraltar Flag' }, { abbrivation: 'gl', name: 'Greenland Flag' }, { abbrivation: 'gm', name: 'Gambia Flag' },
                      { abbrivation: 'gn', name: 'Guinea Flag' }, { abbrivation: 'gp', name: 'Guadeloupe Flag' }, { abbrivation: 'gq', name: 'Equatorial Guinea Flag' },
                      { abbrivation: 'gr', name: 'Greece Flag' }, { abbrivation: 'gs', name: 'South Georgia and the South Sandwich Islands Flag' }, { abbrivation: 'gt', name: 'Guatemala Flag' },
                      { abbrivation: 'gu', name: 'Guam Flag' }, { abbrivation: 'gw', name: 'Guinea-Bissau Flag' }, { abbrivation: 'gy', name: 'Guyana Flag' },
                      { abbrivation: 'hk', name: 'Hong Kong Flag' }, { abbrivation: 'hn', name: 'Honduras Flag' }, { abbrivation: 'hr', name: 'Croatia Flag' },
                      { abbrivation: 'ht', name: 'Haiti Flag' }, { abbrivation: 'hu', name: 'Hungary Flag' }, { abbrivation: 'id', name: 'Indonesia Flag' },
                      { abbrivation: 'ie', name: 'Ireland Flag' }, { abbrivation: 'il', name: 'Israel Flag' }, { abbrivation: 'im', name: 'Isle of Man Flag' },
                      { abbrivation: 'io', name: 'British Indian Ocean Territory Flag' }, { abbrivation: 'iq', name: 'Iraq Flag' }, { abbrivation: 'ir', name: 'Iran (Islamic Republic of) Flag' },
                      { abbrivation: 'is', name: 'Iceland Flag' }, { abbrivation: 'it', name: 'Italy Flag' }, { abbrivation: 'je', name: 'Jersey Flag' },
                      { abbrivation: 'jm', name: 'Jamaica Flag' }, { abbrivation: 'jo', name: 'Jordan Flag' },
                      { abbrivation: 'jp', name: 'Japan Flag' }, { abbrivation: 'ke', name: 'Kenya Flag' }, { abbrivation: 'kg', name: 'Kyrgyzstan Flag' },
                      { abbrivation: 'kh', name: 'Cambodia Flag' }, { abbrivation: 'ki', name: 'Kiribati Flag' }, { abbrivation: 'km', name: 'Comoros Flag' },
                      { abbrivation: 'kn', name: 'Saint Kitts and Nevis Flag' }, { abbrivation: 'kp', name: 'North Korea Flag' }, { abbrivation: 'kr', name: 'South Korea Flag' },
                      { abbrivation: 'kw', name: 'Kuwait Flag' }, { abbrivation: 'ky', name: 'Cayman Islands Flag' }, { abbrivation: 'kz', name: 'Kazakhstan Flag' },
                      { abbrivation: 'la', name: 'Laos Flag' }, { abbrivation: 'lb', name: 'Lebanon Flag' }, { abbrivation: 'lc', name: 'Saint Lucia Flag' },
                      { abbrivation: 'li', name: 'Liechtenstein Flag' }, { abbrivation: 'lk', name: 'Sri Lanka Flag' }, { abbrivation: 'lr', name: 'Liberia Flag' },
                      { abbrivation: 'ls', name: 'Lesotho Flag' }, { abbrivation: 'lt', name: 'Lithuania Flag' }, { abbrivation: 'lu', name: 'Luxembourg Flag' },
                      { abbrivation: 'lv', name: 'Latvia Flag' }, { abbrivation: 'ly', name: 'Libya Flag' }, { abbrivation: 'ma', name: 'Morocco Flag' },
                      { abbrivation: 'mc', name: 'Monaco Flag' }, { abbrivation: 'md', name: 'Moldova Flag' }, { abbrivation: 'me', name: 'Montenegro Flag' },
                      { abbrivation: 'mf', name: 'Saint Martin Flag' }, { abbrivation: 'mg', name: 'Madagascar Flag' }, { abbrivation: 'mh', name: 'Marshall Islands Flag' },
                      { abbrivation: 'mk', name: 'Former Yugoslav Republic of Macedonia Flag' }, { abbrivation: 'ml', name: 'Mali Flag' }, { abbrivation: 'mm', name: 'Myanmar Flag' },
                      { abbrivation: 'mn', name: 'Mongolia Flag' }, { abbrivation: 'mo', name: 'Macau Flag' }, { abbrivation: 'mp', name: 'Northern Mariana Islands Flag' },
                      { abbrivation: 'mq', name: 'Martinique Flag' }, { abbrivation: 'mr', name: 'Mauritania Flag' }, { abbrivation: 'ms', name: 'Montserrat Flag' },
                      { abbrivation: 'mt', name: 'Malta Flag' }, { abbrivation: 'mu', name: 'Mauritius Flag' }, { abbrivation: 'mv', name: 'Maldives Flag' },
                      { abbrivation: 'mw', name: 'Malawi Flag' }, { abbrivation: 'mx', name: 'Mexico Flag' }, { abbrivation: 'my', name: 'Malaysia Flag' },
                      { abbrivation: 'mz', name: 'Mozambique Flag' }, { abbrivation: 'na', name: 'Namibia Flag' }, { abbrivation: 'nc', name: 'New Caledonia Flag' },
                      { abbrivation: 'ne', name: 'Niger Flag' }, { abbrivation: 'nf', name: 'Norfolk Island Flag' }, { abbrivation: 'ng', name: 'Nigeria Flag' },
                      { abbrivation: 'ni', name: 'Nicaragua Flag' }, { abbrivation: 'nl', name: 'Netherlands Flag' }, { abbrivation: 'no', name: 'Norway Flag' },
                      { abbrivation: 'np', name: 'Nepal Flag' }, { abbrivation: 'nr', name: 'Nauru Flag' }, { abbrivation: 'nu', name: 'Niue Flag' },
                      { abbrivation: 'nz', name: 'New Zealand Flag' }, { abbrivation: 'om', name: 'Oman Flag' }, { abbrivation: 'pa', name: 'Panama Flag' },
                      { abbrivation: 'pe', name: 'Peru Flag' }, { abbrivation: 'pf', name: 'French Polynesia Flag' }, { abbrivation: 'pg', name: 'Papua New Guinea Flag' },
                      { abbrivation: 'ph', name: 'Philippines Flag' }, { abbrivation: 'pk', name: 'Pakistan Flag' }, { abbrivation: 'pl', name: 'Poland Flag' },
                      { abbrivation: 'pm', name: 'Saint Pierre and Miquelon Flag' }, { abbrivation: 'pn', name: 'Pitcairn Flag' }, { abbrivation: 'pr', name: 'Puerto Rico Flag' },
                      { abbrivation: 'ps', name: 'State of Palestine Flag' }, { abbrivation: 'pt', name: 'Portugal Flag' }, { abbrivation: 'pw', name: 'Palau Flag' },
                      { abbrivation: 'py', name: 'Paraguay Flag' }, { abbrivation: 'qa', name: 'Qatar Flag' }, { abbrivation: 're', name: 'Réunion Flag' },
                      { abbrivation: 'ro', name: 'Romania Flag' }, { abbrivation: 'rs', name: 'Serbia Flag' }, { abbrivation: 'ru', name: 'Russia Flag' },
                      { abbrivation: 'rw', name: 'Rwanda Flag' }, { abbrivation: 'sa', name: 'Saudi Arabia Flag' }, { abbrivation: 'sb', name: 'Solomon Islands Flag' },
                      { abbrivation: 'sc', name: 'Seychelles Flag' }, { abbrivation: 'sd', name: 'Sudan Flag' }, { abbrivation: 'se', name: 'Sweden Flag' },
                      { abbrivation: 'sg', name: 'Singapore Flag' }, { abbrivation: 'sh', name: 'Saint Helena, Ascension and Tristan da Cunha Flag' }, { abbrivation: 'si', name: 'Slovenia Flag' },
                      { abbrivation: 'sj', name: 'Svalbard and Jan Mayen Flag' }, { abbrivation: 'sk', name: 'Slovakia Flag' }, { abbrivation: 'sl', name: 'Sierra Leone Flag' },
                      { abbrivation: 'sm', name: 'San Marino Flag' }, { abbrivation: 'sn', name: 'Senegal Flag' }, { abbrivation: 'so', name: 'Somalia Flag' },
                      { abbrivation: 'sr', name: 'Suriname Flag' }, { abbrivation: 'ss', name: 'South Sudan Flag' },
                      { abbrivation: 'st', name: 'Sao Tome and Principe Flag' }, { abbrivation: 'sv', name: 'El Salvador Flag' }, { abbrivation: 'sx', name: 'Sint Maarten Flag' },
                      { abbrivation: 'sy', name: 'Syrian Arab Republic Flag' }, { abbrivation: 'sz', name: 'Swaziland Flag' }, { abbrivation: 'tc', name: 'Turks and Caicos Islands Flag' },
                      { abbrivation: 'td', name: 'Chad Flag' }, { abbrivation: 'tf', name: 'French Southern Territories Flag' }, { abbrivation: 'tg', name: 'Togo Flag' },
                      { abbrivation: 'th', name: 'Thailand Flag' }, { abbrivation: 'tj', name: 'Tajikistan Flag' }, { abbrivation: 'tk', name: 'Tokelau Flag' },
                      { abbrivation: 'tl', name: 'Timor-Leste Flag' }, { abbrivation: 'tm', name: 'Turkmenistan Flag' }, { abbrivation: 'tn', name: 'Tunisia Flag' },
                      { abbrivation: 'to', name: 'Tonga Flag' }, { abbrivation: 'tr', name: 'Turkey Flag' }, { abbrivation: 'tt', name: 'Trinidad and Tobago Flag' },
                      { abbrivation: 'tv', name: 'Tuvalu Flag' }, { abbrivation: 'tw', name: 'Taiwan Flag' }, { abbrivation: 'tz', name: 'Tanzania Flag' },
                      { abbrivation: 'ua', name: 'Ukraine Flag' }, { abbrivation: 'ug', name: 'Uganda Flag' }, { abbrivation: 'um', name: 'United States Minor Outlying Islands Flag' },
                      { abbrivation: 'us', name: 'United States of America Flag' }, { abbrivation: 'uy', name: 'Uruguay Flag' }, { abbrivation: 'uz', name: 'Uzbekistan Flag' },
                      { abbrivation: 'va', name: 'Holy See Flag' }, { abbrivation: 'vc', name: 'Saint Vincent and the Grenadines Flag' }, { abbrivation: 've', name: 'Venezuela (Bolivarian Republic of) Flag' },
                      { abbrivation: 'vg', name: 'Virgin Islands (British) Flag' }, { abbrivation: 'vi', name: 'Virgin Islands (U.S.) Flag' }, { abbrivation: 'vn', name: 'Vietnam Flag' },
                      { abbrivation: 'vu', name: 'Vanuatu Flag' }, { abbrivation: 'wf', name: 'Wallis and Futuna Flag' }, { abbrivation: 'ws', name: 'Samoa Flag' },
                      { abbrivation: 'ye', name: 'Yemen Flag' }, { abbrivation: 'yt', name: 'Mayotte Flag' }, { abbrivation: 'za', name: 'South Africa Flag' },
                      { abbrivation: 'zm', name: 'Zambia Flag' }, { abbrivation: 'zw', name: 'Zimbabwe Flag' }]
      };

    },
    methods:{
      icon_bar(icon){

        this.select_icon.class = 'flag-icon flag-icon-'+icon;
        this.select_icon.tag = '<i class="flag-icon flag-icon-'+icon+'"></i>';

        this.icon_bar_status = true;
      },
      close_icon_bar() {
        this.icon_bar_status = false;
      },
      copy_icon(){
        this.$refs.copy_text.select();
        document.execCommand('copy');
        this.$toasted.show('Code Copied to Clipboard', { theme: 'outline',position: 'bottom-right', closeOnSwipe: true, type: 'default', duration: 2000, className:'alert-copy', action : {
          icon : 'times',
          onClick : (e, toastObject) => {
            toastObject.goAway(0);
          }
        } });
      }
    }
  };
</script>