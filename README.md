# Chart Covid19 Pandemic Cases

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

## Develpment Planes

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

#### Features with Interactivity

- Line chart to display the number of COVID19 cases for each county during the pandemic starting in January 2020

  - User Interface to select a date on a line chart consider a mouseover line for date selection
    https://bl.ocks.org/larsenmtl/e3b8b7c2ca4787f77d78f58d41c3da91
  - Tooltip for each county

- Choropleth Map
  - Zoomable
  - Panbable
  - Tooltip
  - Synchronize with user date selection from line chart

#### Extended Features for future Implementation

- Alert of new Covid19 Cases based on user location default to Boston
  - Simple Message at the top of page
- Line Chart with Brush Zoom Axis Label
  https://observablehq.com/@d3/focus-context
- Bubble Map
  https://observablehq.com/@d3/bubble-map
- Bubble Map with scrubber and Dropdown
  https://observablehq.com/@mbostock/covid-19-daily-new-cases

- A bar chart count of Covid19 cases by State or counties
  - Tooltip
    http://bl.ocks.org/mstanaland/6100713
  - Zoomable bar chart
    https://observablehq.com/@d3/zoomable-bar-chart
  - Pannable bar chart
    https://observablehq.com/@d3/pannable-chart
