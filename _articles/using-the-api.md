---
weight: 1
category: Developer Notes
published: true
Weight: 1
Category: For Developers
intro: How developers can plug in to the Loveland parcel API
Title: Using the API
title: Using the API
---
#### Authentication and tokens

All requests to the API must include a `token` parameter. If you have a Pro or higher subscription, you can find this in the Account Settings in Site Control.

#### Place and Parcel Paths

At Loveland we use place *pathnames* to specify administrative boundaries and uniquely describe a geographic region. This includes the country, state, county, and county subdivision. For example, `/us/mi/wayne/detroit` for Detroit or `/us/oh/hamilton` for Hamilton County, OH. If you're not sure what to use for your requests, browsing on [makeloveland.com](https://makeloveland.com/us) to the desired place and copying it out of the URL is a good bet.

*Parcel paths* are similar, and include an integer ID at the end. For example, `/us/mi/wayne/detroit/555`. These uniquely identify a parcel in our database in a simple, human-readable format.


## Parcel search


### By parcel number

`GET /api/v1/search.json?parcelnumb=<pin>&token=<token>`

**Request parameters:**
* `parcelnumb`: The assessor's parcel number to look up. 
* `context` (optional): To specify what county or municipality to search in, you can provide a path. See description above.


### By lat-long (reverse geocoding)

`GET /api/v1/search.json?lat=<y>&lon=<x>&token=<token>`

**Request parameters:**
* `lat`: Latitude (y-coord) in decimal degrees, WGS84 (EPSG 4326) projection.
* `lon`: Longitude (x-coord), same.


### By address

`GET /api/v1/search.json?query=<address>&context=<path>&token=<token>`

**Request parameters:**
* `query`: The address to look up
* `context` (optional): See notes on `context` parameter above


### Parcel details from a known path

`GET /api/v1/parcel.json?path=<path>&token=<token>`

**Request parameters:**
* `path`: The canonical path of the parcel in the Loveland system. For example, `/us/mi/wayne/detroit/555`.

**Response:**
A single GeoJSON Feature for the requested parcel (rather than an array of results).


## Response Format

All of these requests return a JSON response on success, an array of GeoJSON features representing the matched parcels. These include polygon geometries and `properties`. Here's an example response payload:

    {
      results: [
      	{
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [[[-83.09659353074045, 42.30794044957642], [-83.09700166154633, 42.307778380507386], [-83.0970481624631, 42.30784446359719], [-83.09664127714791, 42.30800563738071], [-83.09659353074045, 42.30794044957642]]]
          },
          properties: {
            headline: "250 Campbell",
            path: "/us/mi/wayne/detroit/1000",
            fields: {
              address: "250 CAMPBELL",
              parcelnumb: "16014174.",
              owner: "LOVELAND, JACOB & BIANCA",
              zoning: "M4",
              z_description: "Intensive Industrial District",
              taxablesta: "TAXABLE",
              cursev: 200,
              ...
            },
            field_labels: {
              address: "Address",
              parcelnumb: "Parcel ID",
              owner: "Owner",
              zoning: "Zoning Code",
              z_description: "Zoning",
              taxablesta: "Taxable Status",
              cursev: "State Equalized Value",
              ...
            },
            context: {
              headline: "Detroit, MI",
              path: "/us/mi/wayne/detroit",
              active: true
            }
          },
          id: 1000
        },
        ...
      ]
    }
    
**Notes on properties:**
  * `headline`: a human-friendly display name for the parcel. If no address is available, it falls back to the parcel number.
  * `path`: The parcel's unique identifier as described above in "Place & Parcel Paths"
  * `fields`: Columns from the parcel table. These include some standard column names, plus additional columns varying by the particular county & data available.
  * `field_labels`: Human-friendly labels for each key in `fields`.
  * `context`: A bit of info about the city or county where this parcel is found, including a `path` one can use as `context` for further searches.
