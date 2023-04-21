<template>
    <div>
        <Breadcrumbs main="Buttons" title="Edge Style"/>
        <!-- Container-fluid starts-->
        <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12">

                <div class="card" id="default">
                    <div class="card-header">
                        <h5>Default buttons</h5>
                        <span>Add <code>.btn-pill</code> class for edge button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-primary" class="btn-pill" variant="primary">Primary Button</b-button>
                        <b-tooltip target="default-primary" triggers="hover" placement="top">btn btn-pill btn-primary</b-tooltip>

                        <b-button id="default-secondary" class="btn-pill" variant="secondary">Secondary Button</b-button>
                        <b-tooltip target="default-secondary" triggers="hover" placement="top">btn btn-pill btn-secondary</b-tooltip>

                        <b-button id="default-success" class="btn-pill" variant="success">Success Button</b-button>
                        <b-tooltip target="default-success" triggers="hover" placement="top">btn btn-pill btn-success</b-tooltip>

                        <b-button id="default-info" class="btn-pill" variant="info">Info Button</b-button>
                        <b-tooltip target="default-info" triggers="hover" placement="top">btn btn-pill btn-info</b-tooltip>

                        <b-button id="default-warning" class="btn-pill" variant="warning">Warning Button</b-button>
                        <b-tooltip target="default-warning" triggers="hover" placement="top">btn btn-pill btn-warning</b-tooltip>

                        <b-button id="default-danger" class="btn-pill" variant="danger">Danger Button</b-button>
                        <b-tooltip target="default-danger" triggers="hover" placement="top">btn btn-pill btn-danger</b-tooltip>

                        <b-button id="default-light" class="btn-pill" variant="light">Light Button</b-button>
                        <b-tooltip target="default-light" triggers="hover" placement="top">btn btn-pill btn-light</b-tooltip>
                    </div>
                </div>

                <div class="card" id="large-btn">
                    <div class="card-header">
                        <h5>Large buttons</h5>
                        <span>Add <code>.btn-pill</code> and <code>.btn-lg</code> class for large button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-lg-primary" variant="primary" class="btn-pill" size="lg" >Primary Button</b-button>
                        <b-tooltip target="default-lg-primary" triggers="hover" placement="top">btn btn-pill btn-primary btn-lg</b-tooltip>

                        <b-button id="default-lg-secondary" variant="secondary" class="btn-pill" size="lg" >Secondary Button</b-button>
                        <b-tooltip target="default-lg-secondary" triggers="hover" placement="top">btn btn-pill btn-secondary btn-lg</b-tooltip>

                        <b-button id="default-lg-success" variant="success" class="btn-pill" size="lg" >Success Button</b-button>
                        <b-tooltip target="default-lg-success" triggers="hover" placement="top">btn btn-pill btn-success btn-lg</b-tooltip>

                        <b-button id="default-lg-info" variant="info" class="btn-pill" size="lg" >Info Button</b-button>
                        <b-tooltip target="default-lg-info" triggers="hover" placement="top">btn btn-pill btn-info btn-lg</b-tooltip>

                        <b-button id="default-lg-warning" variant="warning" class="btn-pill" size="lg" >Warning Button</b-button>
                        <b-tooltip target="default-lg-warning" triggers="hover" placement="top">btn btn-pill btn-warning btn-lg</b-tooltip>

                        <b-button id="default-lg-danger" variant="danger" class="btn-pill" size="lg" >Danger Button</b-button>
                        <b-tooltip target="default-lg-danger" triggers="hover" placement="top">btn btn-pill btn-danger btn-lg</b-tooltip>

                        <b-button id="default-lg-light" variant="light" class="btn-pill" size="lg" >Light Button</b-button>
                        <b-tooltip target="default-lg-light" triggers="hover" placement="top">btn btn-pill btn-light btn-lg</b-tooltip>
                    </div>
                </div>

                <div class="card" id="small-btn">
                    <div class="card-header">
                        <h5>Small buttons</h5>
                        <span>Add <code>.btn-sm</code> class for small size buttons</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-sm-primary" variant="primary" class="btn-pill" size="sm" >Primary Button</b-button>
                        <b-tooltip target="default-sm-primary" triggers="hover" placement="top">btn btn-pill btn-primary btn-sm</b-tooltip>

                        <b-button id="default-sm-secondary" variant="secondary" class="btn-pill" size="sm" >Secondary Button</b-button>
                        <b-tooltip target="default-sm-secondary" triggers="hover" placement="top">btn btn-pill btn-secondary btn-sm</b-tooltip>

                        <b-button id="default-sm-success" variant="success" class="btn-pill" size="sm" >Success Button</b-button>
                        <b-tooltip target="default-sm-success" triggers="hover" placement="top">btn btn-pill btn-success btn-sm</b-tooltip>

                        <b-button id="default-sm-info" variant="info" class="btn-pill" size="sm" >Info Button</b-button>
                        <b-tooltip target="default-sm-info" triggers="hover" placement="top">btn btn-pill btn-info btn-sm</b-tooltip>

                        <b-button id="default-sm-warning" variant="warning" class="btn-pill" size="sm" >Warning Button</b-button>
                        <b-tooltip target="default-sm-warning" triggers="hover" placement="top">btn btn-pill btn-warning btn-sm</b-tooltip>

                        <b-button id="default-sm-danger" variant="danger" class="btn-pill" size="sm" >Danger Button</b-button>
                        <b-tooltip target="default-sm-danger" triggers="hover" placement="top">btn btn-pill btn-danger btn-sm</b-tooltip>

                        <b-button id="default-sm-light" variant="light" class="btn-pill" size="sm" >Light Button</b-button>
                        <b-tooltip target="default-sm-light" triggers="hover" placement="top">btn btn-pill btn-light btn-sm</b-tooltip>

                    </div>
                </div>

                <div class="card" id="ex-small-btn">
                    <div class="card-header">
                        <h5>Extra Small buttons</h5>
                        <span>Add <code>.btn-pill</code> and <code>.btn-xs</code> class for extra small button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-xs-primary" variant="primary" class="btn-pill" size="xs" >Primary Button</b-button>
                        <b-tooltip target="default-xs-primary" triggers="hover" placement="top">btn btn-pill btn-primary btn-xs</b-tooltip>

                        <b-button id="default-xs-secondary" variant="secondary" class="btn-pill" size="xs" >Secondary Button</b-button>
                        <b-tooltip target="default-xs-secondary" triggers="hover" placement="top">btn btn-pill btn-secondary btn-xs</b-tooltip>

                        <b-button id="default-xs-success" variant="success" class="btn-pill" size="xs" >Success Button</b-button>
                        <b-tooltip target="default-xs-success" triggers="hover" placement="top">btn btn-pill btn-success btn-xs</b-tooltip>

                        <b-button id="default-xs-info" variant="info" class="btn-pill" size="xs" >Info Button</b-button>
                        <b-tooltip target="default-xs-info" triggers="hover" placement="top">btn btn-pill btn-info btn-xs</b-tooltip>

                        <b-button id="default-xs-warning" variant="warning" class="btn-pill" size="xs" >Warning Button</b-button>
                        <b-tooltip target="default-xs-warning" triggers="hover" placement="top">btn btn-pill btn-warning btn-xs</b-tooltip>

                        <b-button id="default-xs-danger" variant="danger" class="btn-pill" size="xs" >Danger Button</b-button>
                        <b-tooltip target="default-xs-danger" triggers="hover" placement="top">btn btn-pill btn-danger btn-xs</b-tooltip>

                        <b-button id="default-xs-light" variant="light" class="btn-pill" size="xs" >Light Button</b-button>
                        <b-tooltip target="default-xs-light" triggers="hover" placement="top">btn btn-pill btn-light btn-xs</b-tooltip>

                    </div>
                </div>

                <div class="card" id="active-small-btn">
                    <div class="card-header">
                        <h5>Active buttons</h5>
                        <span>Add <code>.active</code> class for active state</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-active-primary" variant="primary" class="btn-pill" :pressed="true">Active</b-button>
                        <b-tooltip target="default-active-primary" triggers="hover" placement="top">btn btn-pill btn-primary active</b-tooltip>

                        <b-button id="default-active-secondary" variant="secondary" class="btn-pill" :pressed="true">Active</b-button>
                        <b-tooltip target="default-active-secondary" triggers="hover" placement="top">btn btn-pill btn-secondary active</b-tooltip>

                        <b-button id="default-active-success" variant="success" class="btn-pill" :pressed="true">Active</b-button>
                        <b-tooltip target="default-active-success" triggers="hover" placement="top">btn btn-pill btn-success active</b-tooltip>

                        <b-button id="default-active-info" variant="info" class="btn-pill" :pressed="true">Active</b-button>
                        <b-tooltip target="default-active-info" triggers="hover" placement="top">btn btn-pill btn-info active</b-tooltip>

                        <b-button id="default-active-warning" variant="warning" class="btn-pill" :pressed="true">Active</b-button>
                        <b-tooltip target="default-active-warning" triggers="hover" placement="top">btn btn-pill btn-warning active</b-tooltip>

                        <b-button id="default-active-danger" variant="danger" class="btn-pill" :pressed="true">Active</b-button>
                        <b-tooltip target="default-active-danger" triggers="hover" placement="top">btn btn-pill btn-danger active</b-tooltip>

                        <b-button id="default-active-light" variant="light" class="btn-pill" :pressed="true">Active</b-button>
                        <b-tooltip target="default-active-light" triggers="hover" placement="top">btn btn-pill btn-light active</b-tooltip>

                    </div>
                </div>

                <div class="card" id="disabled-small-btn">
                    <div class="card-header">
                        <h5>Disabled buttons</h5>
                        <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button variant="primary" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="secondary" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="success" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="info" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="warning" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="danger" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="light" class="btn-pill" disabled >Disabled</b-button>
                    </div>
                </div>

                <div class="card" id="custom-state-button">
                    <div class="card-header">
                        <h5>Custom state buttons</h5>
                        <span>The <code>.btn</code> class used with <code>&lt;button&gt;</code>, <code>&lt;a&gt;</code> and <code>&lt;input&gt;</code> elements.</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-custom-primary" variant="primary" class="btn-pill" href="#" >Link</b-button>
                        <b-tooltip target="default-custom-primary" triggers="hover" placement="top">btn btn-primary</b-tooltip>

                        <b-button id="default-custom-secondary" variant="secondary" class="btn-pill" type="button" >Input</b-button>
                        <b-tooltip target="default-custom-secondary" triggers="hover" placement="top">btn btn-secondary</b-tooltip>

                        <b-button id="default-custom-success" variant="success" class="btn-pill" type="submit" >Submit</b-button>
                        <b-tooltip target="default-custom-success" triggers="hover" placement="top">btn btn-success</b-tooltip>

                        <b-button id="default-custom-info" variant="info" class="btn-pill" type="button" >Button</b-button>
                        <b-tooltip target="default-custom-info" triggers="hover" placement="top">btn btn-info</b-tooltip>
                    </div>
                </div>

                <div class="card" id="outline-button">
                    <div class="card-header">
                        <h5>outline buttons</h5>
                        <span>Add <code>.btn-pill</code> and <code>.btn-outline-*</code> class for button with outline</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-outline-primary" variant="outline-primary" class="btn-pill">Primary Button</b-button>
                        <b-tooltip target="default-outline-primary" triggers="hover" placement="top">btn btn-pill btn-outline-primary</b-tooltip>

                        <b-button id="default-outline-secondary" variant="outline-secondary" class="btn-pill">Secondary Button</b-button>
                        <b-tooltip target="default-outline-secondary" triggers="hover" placement="top">btn btn-pill btn-outline-secondary</b-tooltip>

                        <b-button id="default-outline-success" variant="outline-success" class="btn-pill">Success Button</b-button>
                        <b-tooltip target="default-outline-success" triggers="hover" placement="top">btn btn-pill btn-outline-success</b-tooltip>

                        <b-button id="default-outline-info" variant="outline-info" class="btn-pill">Info Button</b-button>
                        <b-tooltip target="default-outline-info" triggers="hover" placement="top">btn btn-pill btn-outline-info</b-tooltip>

                        <b-button id="default-outline-warning" variant="outline-warning" class="btn-pill">Warning Button</b-button>
                        <b-tooltip target="default-outline-warning" triggers="hover" placement="top">btn btn-pill btn-outline-warning</b-tooltip>

                        <b-button id="default-outline-danger" variant="outline-danger" class="btn-pill">Danger Button</b-button>
                        <b-tooltip target="default-outline-danger" triggers="hover" placement="top">btn btn-pill btn-outline-danger</b-tooltip>

                        <b-button id="default-outline-light" variant="outline-light" class="btn-pill">Light Button</b-button>
                        <b-tooltip target="default-outline-light" triggers="hover" placement="top">btn btn-pill btn-outline-light</b-tooltip>
                    </div>
                </div>

                <div class="card" id="outline-bold-button">
                    <div class="card-header">
                        <h5>bold Border outline buttons</h5>
                        <span>Add <code>.btn-pill</code> and <code>.btn-outline-*-2x</code> class for button with bold outline</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-outline-primary-2x" variant="outline-primary"  class="btn-pill btn-outline-primary-2x">Primary Button</b-button>
                        <b-tooltip target="default-outline-primary-2x" triggers="hover" placement="top">btn btn-pill btn-outline-primary-2x</b-tooltip>

                        <b-button id="default-outline-secondary-2x" variant="outline-secondary"  class="btn-pill btn-outline-secondary-2x">Secondary Button</b-button>
                        <b-tooltip target="default-outline-secondary-2x" triggers="hover" placement="top">btn btn-pill btn-outline-secondary-2x</b-tooltip>

                        <b-button id="default-outline-success-2x" variant="outline-success"  class="btn-pill btn-outline-success-2x">Success Button</b-button>
                        <b-tooltip target="default-outline-success-2x" triggers="hover" placement="top">btn btn-pill btn-outline-success-2x</b-tooltip>

                        <b-button id="default-outline-info-2x" variant="outline-info"  class="btn-pill btn-outline-info-2x">Info Button</b-button>
                        <b-tooltip target="default-outline-info-2x" triggers="hover" placement="top">btn btn-pill btn-outline-info-2x</b-tooltip>

                        <b-button id="default-outline-warning-2x" variant="outline-warning"  class="btn-pill btn-outline-warning-2x">Warning Button</b-button>
                        <b-tooltip target="default-outline-warning-2x" triggers="hover" placement="top">btn btn-pill btn-outline-warning-2x</b-tooltip>

                        <b-button id="default-outline-danger-2x" variant="outline-danger"  class="btn-pill btn-outline-danger-2x">Danger Button</b-button>
                        <b-tooltip target="default-outline-danger-2x" triggers="hover" placement="top">btn btn-pill btn-outline-danger-2x</b-tooltip>

                        <b-button id="default-outline-light-2x" variant="outline-light"  class="btn-pill btn-outline-light-2x">Light Button</b-button>
                        <b-tooltip target="default-outline-light-2x" triggers="hover" placement="top">btn btn-pill btn-outline-light-2x</b-tooltip>

                    </div>
                </div>

                <div class="card" id="outline-large-button">
                    <div class="card-header">
                        <h5>outline Large buttons</h5>
                        <span>Add <code>.btn-pill</code>,<code>.btn-outline-*</code> and <code>.btn-lg</code> class for large button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-outline-primary-lg" variant="outline-primary" size="lg" class="btn-pill btn-outline-primary">Primary Button</b-button>
                        <b-tooltip target="default-outline-primary-lg" triggers="hover" placement="top">btn btn-pill btn-outline-primary btn-lg</b-tooltip>

                        <b-button id="default-outline-secondary-lg" variant="outline-secondary" size="lg" class="btn-pill btn-outline-secondary">Secondary Button</b-button>
                        <b-tooltip target="default-outline-secondary-lg" triggers="hover" placement="top">btn btn-pill btn-outline-secondary btn-lg</b-tooltip>

                        <b-button id="default-outline-success-lg" variant="outline-success" size="lg" class="btn-pill btn-outline-success">Success Button</b-button>
                        <b-tooltip target="default-outline-success-lg" triggers="hover" placement="top">btn btn-pill btn-outline-success btn-lg</b-tooltip>

                        <b-button id="default-outline-info-lg" variant="outline-info" size="lg" class="btn-pill btn-outline-info">Info Button</b-button>
                        <b-tooltip target="default-outline-info-lg" triggers="hover" placement="top">btn btn-pill btn-outline-info btn-lg</b-tooltip>

                        <b-button id="default-outline-warning-lg" variant="outline-warning" size="lg" class="btn-pill btn-outline-warning">Warning Button</b-button>
                        <b-tooltip target="default-outline-warning-lg" triggers="hover" placement="top">btn btn-pill btn-outline-warning btn-lg</b-tooltip>

                        <b-button id="default-outline-danger-lg" variant="outline-danger" size="lg" class="btn-pill btn-outline-danger">Danger Button</b-button>
                        <b-tooltip target="default-outline-danger-lg" triggers="hover" placement="top">btn btn-pill btn-outline-danger btn-lg</b-tooltip>

                        <b-button id="default-outline-light-lg" variant="outline-light" size="lg" class="btn-pill btn-outline-light">Light Button</b-button>
                        <b-tooltip target="default-outline-light-lg" triggers="hover" placement="top">btn btn-pill btn-outline-light btn-lg</b-tooltip>

                    </div>
                </div>

                <div class="card" id="outline-small-button">
                    <div class="card-header">
                        <h5>outline small buttons</h5>
                        <span>Add <code>.btn-pill</code>,<code>.btn-outline-*</code> and <code>.btn-sm</code> class for small button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-outline-primary-sm" variant="outline-primary" size="sm"  class="btn-pill btn-outline-primary">Primary Button</b-button>
                        <b-tooltip target="default-outline-primary-sm" triggers="hover" placement="top">btn btn-pill btn-outline-primary btn-sm</b-tooltip>

                        <b-button id="default-outline-secondary-sm" variant="outline-secondary" size="sm"  class="btn-pill btn-outline-secondary">Secondary Button</b-button>
                        <b-tooltip target="default-outline-secondary-sm" triggers="hover" placement="top">btn btn-pill btn-outline-secondary btn-sm</b-tooltip>

                        <b-button id="default-outline-success-sm" variant="outline-success" size="sm"  class="btn-pill btn-outline-success">Success Button</b-button>
                        <b-tooltip target="default-outline-success-sm" triggers="hover" placement="top">btn btn-pill btn-outline-success btn-sm</b-tooltip>

                        <b-button id="default-outline-info-sm" variant="outline-info" size="sm"  class="btn-pill btn-outline-info">Info Button</b-button>
                        <b-tooltip target="default-outline-info-sm" triggers="hover" placement="top">btn btn-pill btn-outline-info btn-sm</b-tooltip>

                        <b-button id="default-outline-warning-sm" variant="outline-warning" size="sm"  class="btn-pill btn-outline-warning">Warning Button</b-button>
                        <b-tooltip target="default-outline-warning-sm" triggers="hover" placement="top">btn btn-pill btn-outline-warning btn-sm</b-tooltip>

                        <b-button id="default-outline-danger-sm" variant="outline-danger" size="sm"  class="btn-pill btn-outline-danger">Danger Button</b-button>
                        <b-tooltip target="default-outline-danger-sm" triggers="hover" placement="top">btn btn-pill btn-outline-danger btn-sm</b-tooltip>

                        <b-button id="default-outline-light-sm" variant="outline-light" size="sm"  class="btn-pill btn-outline-light">Light Button</b-button>
                        <b-tooltip target="default-outline-light-sm" triggers="hover" placement="top">btn btn-pill btn-outline-light btn-sm</b-tooltip>

                    </div>
                </div>

                <div class="card" id="ex-outline-small-button">
                    <div class="card-header">
                        <h5>Outline extra small buttons</h5>
                        <span>Add <code>.btn-pill</code>,<code>.btn-outline-*</code> and <code>.btn-xs</code> class for extra small button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-outline-primary-xs" variant="outline-primary" size="xs"  class="btn-pill btn-outline-primary">Primary Button</b-button>
                        <b-tooltip target="default-outline-primary-xs" triggers="hover" placement="top">btn btn-pill btn-outline-primary btn-xs</b-tooltip>

                        <b-button id="default-outline-secondary-xs" variant="outline-secondary" size="xs"  class="btn-pill btn-outline-secondary">Secondary Button</b-button>
                        <b-tooltip target="default-outline-secondary-xs" triggers="hover" placement="top">btn btn-pill btn-outline-secondary btn-xs</b-tooltip>

                        <b-button id="default-outline-success-xs" variant="outline-success" size="xs"  class="btn-pill btn-outline-success">Success Button</b-button>
                        <b-tooltip target="default-outline-success-xs" triggers="hover" placement="top">btn btn-pill btn-outline-success btn-xs</b-tooltip>

                        <b-button id="default-outline-info-xs" variant="outline-info" size="xs"  class="btn-pill btn-outline-info">Info Button</b-button>
                        <b-tooltip target="default-outline-info-xs" triggers="hover" placement="top">btn btn-pill btn-outline-info btn-xs</b-tooltip>

                        <b-button id="default-outline-warning-xs" variant="outline-warning" size="xs"  class="btn-pill btn-outline-warning">Warning Button</b-button>
                        <b-tooltip target="default-outline-warning-xs" triggers="hover" placement="top">btn btn-pill btn-outline-warning btn-xs</b-tooltip>

                        <b-button id="default-outline-danger-xs" variant="outline-danger" size="xs"  class="btn-pill btn-outline-danger">Danger Button</b-button>
                        <b-tooltip target="default-outline-danger-xs" triggers="hover" placement="top">btn btn-pill btn-outline-danger btn-xs</b-tooltip>

                        <b-button id="default-outline-light-xs" variant="outline-light" size="xs"  class="btn-pill btn-outline-light">Light Button</b-button>
                        <b-tooltip target="default-outline-light-xs" triggers="hover" placement="top">btn btn-pill btn-outline-light btn-xs</b-tooltip>

                    </div>
                </div>

                <div class="card" id="ex-small-btn">
                    <div class="card-header">
                        <h5>Disabled outline buttons</h5>
                        <span>Add <code>.disabled</code> class or <code>disabled="disabled"</code> attribute for disabled button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button variant="outline-primary" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="outline-secondary" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="outline-success" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="outline-info" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="outline-warning" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="outline-danger" class="btn-pill" disabled >Disabled</b-button>
                        <b-button variant="outline-light" class="btn-pill" disabled >Disabled</b-button>
                    </div>
                </div>

                <div class="card" id="gradiant">
                    <div class="card-header">
                        <h5>Gradien buttons</h5>
                        <span>Add <code>.btn-pill</code> and <code>.btn-*-gradien</code>class for gradien button</span>
                    </div>
                    <div class="card-body btn-showcase">
                        <b-button id="default-primary-gradien" variant="outline-primary" class="btn-pill btn-primary-gradien">Primary Button</b-button>
                        <b-tooltip target="default-primary-gradien" triggers="hover" placement="top">btn btn-pill btn-primary-gradien</b-tooltip>

                        <b-button id="default-secondary-gradien" variant="outline-secondary" class="btn-pill btn-secondary-gradien">Secondary Button</b-button>
                        <b-tooltip target="default-secondary-gradien" triggers="hover" placement="top">btn btn-pill btn-secondary-gradien</b-tooltip>

                        <b-button id="default-success-gradien" variant="outline-success" class="btn-pill btn-success-gradien">Success Button</b-button>
                        <b-tooltip target="default-success-gradien" triggers="hover" placement="top">btn btn-pill btn-success-gradien</b-tooltip>

                        <b-button id="default-info-gradien" variant="outline-info" class="btn-pill btn-info-gradien">Info Button</b-button>
                        <b-tooltip target="default-info-gradien" triggers="hover" placement="top">btn btn-pill btn-info-gradien</b-tooltip>

                        <b-button id="default-warning-gradien" variant="outline-warning" class="btn-pill btn-warning-gradien">Warning Button</b-button>
                        <b-tooltip target="default-warning-gradien" triggers="hover" placement="top">btn btn-pill btn-warning-gradien</b-tooltip>

                        <b-button id="default-danger-gradien" variant="outline-danger" class="btn-pill btn-danger-gradien">Danger Button</b-button>
                        <b-tooltip target="default-danger-gradien" triggers="hover" placement="top">btn btn-pill btn-danger-gradien</b-tooltip>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- Container-fluid Ends-->
</div>
</template>

<script>
  export default {
  };
</script>