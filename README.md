# Chart Covid19 Pandemic Cases

[View the live project here.](https://ngiappuoykoh.github.io/chart-covid19/index.html)

![Multidevice Mockup](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/multiDeviceMockup.png)

Interactive Chart to display the trend of the number of Covid19 cases by US County during the pandemic. The data is provided by the New York Times and updated daily and automatically reflected in a chart usingD3 Data-Driven Documents.

The idea is to report realtime data with a simple focus on Covid19 cases trends by US counties for a general audience. It is not a professional chart or dashboard for an audience interested in in-depth analysis.

The user will be able to select a specific point in time to display the counts at that time. The purpose is to allow users to view the trend as information that may trigger curiosity and support decision making. Engaging as many people with one useful piece of information is vital to individual response to COVID19 in a situation of pandemic information overload.

## UX

> "A dashboard is a visual display of the most important information needed to achieve one or more objectives; consolidated and arranged on a single screen so the information can be monitored at a glance." - Stephen Few Dashboard Confusion Revisited

The purpose is to provide clear and concise information on new cases of Covid19 by location. This data is updated in realtime when released by the New Your Times.

The chart displays the trend of cases during the Covid19 Pandemic. The user can select a specific point in time to review the count of cases by county.

### User Stories

Audience: Adult individuals who are non-technical and do not have a quantitative or geographic background.

#### Persona: General User

- As a user I want to be notified of latest counts number of COIVID19 cases as soon as the information becomes available
- As a user I want to review the trend of cases by counties during the COVID19
  Pandemic
- As a user I want to view counties sorted from highest to lowest number of cases

#### Persona: Resident of a County

- As a user I want to be able to select a specific date to report the number of cases by location
- As a user I want to be able to select a location and get the count of Covid19 cases
- As a user I want to be able to select a location and time range to see the trend of Covid19 cases

## Development Planes

### Strategy Plane - User Needs and Business Objective

Develop a minimal viable product for a non-technical audience with realtime COVID19 cases by Massachusetts counties taken from a reputable data source.

Users will be able to interact with the data for specific dates.

The scope is to solely display the data as-is to the user to support decisions that are meaningful to them.

- Research and drafted initial project for COVID19 chart for non-technical users.
- Drafted initial project goal, scope and features using D3, TDD, Travis CI Javascript, HTML, CSS based on MS2 requirements and MS1 feedback
- Review and discuss the feasibility of learning D3 and implementing a simple dashboard with my mentor. The targeting 4-5 weeks project completion timeline

### Identify Business Goals and Objectives

- Build a chart to visualize population trends by location over time
- User interaction will be enabled for date selection to display information
- Present information clearly to minimize cognitive load required to understand the information
- Data is presented to inform and support decision making for users
- Dynamic Data-driven chart that will update automatically with the release of new data
- Chart will scale and adjust automatically based on data

### Scope Plane

#### Personas

- Non-Technical Audience Personas
  - General Public Individual
  - Resident of a County
  - Service Provider Planner

#### Features with Interactivity

- Line chart to display the number of COVID19 cases for each county during the pandemic starting in January 2020

  - [User Interface to select a date on a line chart consider a mouseover line for date selection](https://bl.ocks.org/larsenmtl/e3b8b7c2ca4787f77d78f58d41c3da91)
  - Tooltip for each county

- Choropleth Map
  - Zoomable
  - Pannable
  - Tooltip
  - Synchronize with user date selection from line chart

#### Extended Features for future Implementation

- Alert of new Covid19 Cases based on user location default to Boston
- Notification at the top of the page to publish latest data release information
- [Line Chart with Brush Zoom Axis Label](https://observablehq.com/@d3/focus-context)
- [Bubble Map](https://observablehq.com/@d3/bubble-map)
- [Bubble Map with scrubber and Dropdown](https://observablehq.com/@mbostock/covid-19-daily-new-cases)

- A bar chart count of Covid19 cases by State or counties
  - [Tooltip](http://bl.ocks.org/mstanaland/6100713)
  - [Zoomable bar chart](https://observablehq.com/@d3/zoomable-bar-chart)
  - [Pannable bar chart](https://observablehq.com/@d3/pannable-chart)

#### Releases

##### Release 1 (Current)

- Automatic Data load and Processing
- Multiple Line Chart of Cases for Massachusetts Counties
- Line to select a specific date

##### Release 2 (Current)

- Choropleth Map of US Counties
- Zoomable and Pannable
- Tooltips to render number of Covid cases by county

##### Release 3 (Current)

- Synchronize line chart and Choropleth Map using for the date selected by the user on the line chart
- Highlight the counties and render information in the tooltips for the selected date
- Access to detail information for Data Source and Date Notes via external hyperlinks

##### Release 4 (Future)

- Alert of new Covid19 Cases based on user location default to Boston
- Notification Message at the top of the page for user information stored in the browser session
- Add Brush Zoom Axis Label to the line chart

##### Release 5 (Future)

- Add bubbles to Choropleth Map sized by counts
- Add Scrubber with a dropdown to select counties and data for rendering

##### Release 6 (Future)

- Add bar chart for the counts of Covid19 cases by State or counties
- Tooltip
- Zoomable
- Pannable

#### User Stories (Future)

##### Persona: Service Provider Planner (Future Enhancement)

- As a service provider I want to identify clusters of Covid19 by counties to be able to offer delivery of services
- As a service provided I want to see the movement of clusters of covid19 cases counties since the outbreak of the pandemic to be able to determine the type of services to offer
- As a service provider I want to understand the time of the growth and shrinking of clusters by location the system with render a map showing an animation of clusters growth shrinking and expanding

##### Persona: Resident of a County(Future Enhancements)

- As a user I want to be able to select a location and time range to see the trend of Covid19 cases
- As a user I click on the bar chart on the state and a period and want to see the detail counts the system will render tool-tip with the information or update the legend information
- As a user I click on the bar chart on the state the system will generate a line chart by counties
- The user brush over the line chart to view data for a specific period the system will scale the line chart
- As a user I want to be select a location and be alerted when a new case and deaths appear

### Structure Plane

Interaction design and Information Architecture

Objective: Maintain traceability of components to business requirements

Special Note: Features were scaled back significantly constrained by the steep learning curve of D3, JSON, topoJSON GeoJSON, Javascript ES6, NodeJS, NPM, and related technologies.

#### Mockups

- Line Chart
  ![Line Chart Mockup](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/LineChartMockup.jpg)
- Pannable Chart
  ![Pannable Chart Mockup](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/PannableChartMockup.png)
- Bubble Map
  ![Bubble Map Mockup](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/BubbleMapMockup.png)

#### Organization of Functionality and Content

- Mobile-first design for line chart visibility using the entire device viewport
- Mechanism for user input simple point and click
- Tooltip information is visible when rendered
- Color of lines use d3.schemeAccent for the sorted ordinal representation of counties
- Dynamic update of chart and information is automatic when new data is released
- Application components are structured using javascript modules and functions to maximize ease deployment and code maintenance

#### Interaction Design

- Clear 3 step process on how to interact with the chart to select a date to dynamically set the map to render data for the selected date
- Publish concise instructions on how to use the chart and map
- The date selected is captured and displayed in the title of the map

#### Consistent, Predictable

- Data source information is provided as external links in the footer of the map
- Hover renders tooltips for date selector line and county on the map
- Zoom and panning uses intuitive mouse drag and scroll for large devices and gestures on small devices

#### Visible

- Tooltip rendering is not obstructed and styled to be visible

#### Learnable

- Clear sections on a single page accessible by scrolling and avoid navigating to different pages
- Provide minimal instructions to minimize cognitive load

#### Feedback

- Dynamic capture of the date selected by the user and displayed clearly at top of map as feedback to confirm the date selection

#### Information Architecture

- Single page with a 2 section Dashboard so that user can view information at a glance
- The map invites user interaction using intuitive mouse actions on computers and hand gestures on mobile devices

#### Principles of Organization

- Logo and title provide a clear purpose for the type of target audience and the specific information presented
- Clear 3 step user instructions on how to navigate the web page
- Overview information presented in a multi-line chart above and detail information presented in the interactive map below
- Footnote has links to the data source and data notes

#### Functional Requirements excluded due to limitations of limited current knowledge, skills and time available

- Synchronize chart and map when the user selects a period
- Render alerts to the user of data releases with summary information
- Enable user interaction to select a period to display data of interest
- Enable user interaction to choose what information data to display
- Render messages to the user when unable to access to endpoints
- Handling missing data and anomalies
- Application error handling to facilitate capture and report application failures
- Test Driven Design development approach for a couple of the components using ES6 modules and functions with Travis CI/QUnit

### Skeleton Plane

#### Visual Elements - Navigation and Interface Design

The focus is to keep the visual elements simple and minimize cognitive overload using a dashboard consisting of an interactive chart and a map.

A single web page with sections will present the information to avoid the need to navigate to a different page to minimize distraction.

Supplemental information on the data source and data notes are available and accessible via hyperlinks to external sites.

Progressive disclosure of information starts with a chart displaying summary information overtime and sorted by order of counts. The user can then select a specific date and proceed to explore the pannable and zoomable map to view detailed county information.

- COVID19 Single Page Dashboard

![COVID19 Chart](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/COVID19.png)

- Line Chart Mockup

![Line Chart Mockup](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/LineChartMockup.jpg)

### Visualization Analysis and Design with D3

Utilize the Marks and Channels framework in the design of the D3 chart and map

![Marks and Channels](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/marksChannelsVisualization.png)

Source: Visualization Analysis and Design by Tamara Munzner

##### Color and Fonts

D3 and colorbrewer color schemes were considered together with data visualization Marks and Channels design by Tamara Munzner.

The color schemes available were for up to 12 colors. The colors in combination with the ordinal and graphical positions to differentiate the lines for the counties.

##### Chart

lines and legend - colorScale = d3.scaleOrdinal(d3.schemeAccent);

##### Map

polygon colorScale = d3.scaleOrdinal(d3.schemePaired)

#### Typography

GoogleFont - font-family: "Roboto", sans-serif;

##### Icons

Font Awesome Icons

#### Utilize CSS Grid to handle D3 framework and SVG with modern browsers

Unidirectional Data Flow
![Marks and Channels](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/unidirectionalDataFlow.png)

##### Web Page

- Fonts for Accessibility
- WCAG Color contrast checker contrast Ratio
- Chrome Devtool Lighthouse Accessibility
- Responsive breakpoints 600px and 300px

#### Existing Features

##### Logo, Title and Instructions

At the top of the page, a custom logo with a tag line will introduce the purpose of the dashboard. A 3-step guide will instruct the user on how to interact with the chart and map.

##### Multiple Line Chart

- Dynamic Data Load

  The user can view the latest data in real-time when information is released and made publicly available.

- D3 Line Chart

  The line chart will adjust dynamically to include new data as it is released.

- Date Selector

  The user can select a date to view data.

##### Choropleth Map US Counties

- Choropleth Map Tooltip

  The user can use the mouse to hover over a county to render a tooltip to display data for that county.

- Choropleth Map by US County

  The user can view data for the latest information when made available.

##### Line Chart

- The lines and color legend of the line chart used d3.schemeAccent in combination with the sorted ordinal representation of COVID19 cases by counties

- The color legend for the lines are sorted dynamically based on the counts sorted from highest to lowest

##### Choropleth Map

- Color of counties use d3.schemePaired to optimize delineation of counties in combination with the coordinates of the counties

#### Features Left to Implement

- Handle endpoint access failure with messages rendered to the user
- Handle data Load and processing error with messages rendered to the user
- Selector line tooltip for the user can view cases by county for the date selected
- Synchronize the line chart and choropleth map to render the same information for the date selected on the line chart

### Future feature idea

- Alert to provide summary data as of the latest data release
- Alert to display information based on user data stored in browser session Window.localStorage
- Implement a transition to animate the change in the number of cases over the COVID19 Pandemic period
- Add Modal pages with annotated diagrams and gifs provide detail steps and explain how to use chart and map
- Render Data Source and Notes hyperlinks as modal pages instead of using a seperate browser tab
- Consider implementing a webpage mode using pattern texture for color blind users as a future enhancement

### Surface Plane - Visual Design

#### Existing Features

##### Multiple Line Chart

- Dynamic Data Load
  The user can view the latest data in real-time when information is released and made publicly available.

- D3 Line Chart
  The line chart will adjust dynamically to include new data as it is released.

- Date Selector
  The user can select a date to view data.

##### Choropleth Map US Counties

- Choropleth Map Tooltip
  The user can use the mouse to hover over a county to render a tooltip to display data for that county.

- Choropleth Map by US County
  The user can view data for the latest information when made available.

#### Features Left to Implement

- Handle endpoint access failure with messages rendered to the user
- Handle data Load and processing error with messages rendered to the user
- Selector line tooltip for the user can view cases by county for the date selected
- Synchronize the line chart and choropleth map to render the same information for the date selected on the line chart

#### Future feature idea

- Alert to provide summary data as of the latest data release
- Alert to display information based on user data stored in browser session Window.localStorage
- Implement a transition to animate the change in the number of cases over the COVID19 Pandemic period

### Surface Plane - Visual Design

A Single Page with multiple sections designed to be responsive thresholds at 600px and 300px

#### Real-Time Release of Daily Covid19 Counts

- Real-time dynamic update of daily COVID19 data released by the NY York Times

![logoTitleInstruct](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/logoTitleInstruct.png)

#### Logo and Title

- The Logo is designed to reflect the intended target audience who do not require advanced digital and analytics expertise to utilize the dashboard

* The title states the focus and purpose of the charts

#### Simple 3-Steps Instruction

- User instruction section on webpage consists of 3 steps presented using animated cards

#### Multiple Line Chart of COVID19 Cumulative Cases

![multiLineChart](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/multiLineChart.png)

- Cumulative trend of COVID19 cumulative counts by county for the State of Massachusetts

- The chart legend is sorted by the most recent cumulative counties in descending order

- Selector line renders a tooltip for the selected date is synchronized and captured as part of the map title

* Date selected is captured and dynamically displayed with the map title and rendered in the tooltip for selected county

#### Choropleth Map of Covid19 Cases for counties in the US

![choroplethMap](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/choroplethMapUSCounties.png)

![choroplethMapPanZoom](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/choroplethMapPanZoom.png)

- The Choropleth Map interactive features include zooming and panning with tooltip to display the cumulative number of COVID19 cases and deaths for each county

- Map footer includes external hyperlinks to the data source and data notes

#### UX and Accessibility

##### Color Scheme

- Use [Accessible color palette builder](https://toolness.github.io/accessible-color-matrix/)

![Accessible Color Palette](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/accessibleColorPalette.jpg)

##### Font

- GoogleFont Roboto and Open Sans

![Roboto](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/robotoFont.png)
![Sans Serif](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/docimages/sansSerifFont.png)

##### Contrast Ratio

[WCAG Color contrast checker](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?hl=en)

![Web Page Contrast Checker](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/contrastChecker.jpg)

#### Data Source and Data Notes

- NY Times COVID19 Data

![New York Times Data](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/dataNYTimes.jpg)

- The COVID Tracking Project
  ![Data Notes](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/dataNotes.jpg)

#### Defensive Programming

- Custom 404 Page Not Found

Notify the user that the web page is not available and provide a link to retry accessing the home page

![Custom 404 Page](https://github.com/NgiapPuoyKoh/chart-covid19/blob/master/assets/wireframes/404Page.png)

## Technologies Used

- HTML5
- CSS
- CSS GRID
- Javascript
- SVG
- D3
- ES6
- JSON
- topoJson
- GeoJason
- NodeJS
- NPM

- GitHub
- GitHub Projects
- Git Pages

- Chrome DEV Toool
- Gitpod
- Visual Studio Code (VSCode)
- Balsamiq
- SnagIt

- Node
- Travis CI Test runner
- Testing Framework
- QUnit Assertion library

Validators

- [CSS Beautifier](https://www.freeformatter.com/css-beautifier.html)
- [WCAG Color contrast checker](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?hl=en)
- [Responsive Design Checker](http://ami.responsivedesign.is/)
- Chrome Dev Tool
  - Ligthouse Accessibility
  - JS loaded using dev tool/network

Accessibility Audit
JS loaded using dev tool/network
TDD and Test Automation

- QUnit
- Jarvis CI

Proof of Concept Map

- topoJSON
- geoJSON
- React
