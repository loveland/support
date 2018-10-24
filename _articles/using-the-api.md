---
weight: 1
category: Developer Notes
published: true
Weight: 1
Category: For Developers
---
### General notes

#### Authentication and tokens

All requests to the API must include a `token` parameter. If you have a Pro or higher subscription, you can find this in the Account Settings in Site Control.

#### Place and Parcel Paths

At Loveland we use place *pathnames* to specify administrative boundaries and uniquely describe a geographic region. This includes the country, state, county, and county subdivision. For example, `/us/mi/wayne/detroit` for Detroit or `/us/oh/hamilton` for Hamilton County, OH. If you're not sure what to use for your requests, browsing on [makeloveland.com](https://makeloveland.com/us) to the desired place and copying it out of the URL is a good bet.

*Parcel paths* are similar, and include an integer ID at the end. For example, `/us/mi/wayne/detroit/555`. These uniquely identify a parcel in our database in a simple, human-readable format.


### Parcel search

#### By parcel number

`GET /api/v1/search.json?parcelnumb=<pin>&token=<token>`

**Request parameters:**
* `parcelnumb`: The assessor's parcel number to look up. 
* `context` (optional): To specify what county or municipality to search in, you can provide a path. See description above.


#### By lat-long (reverse geocoding)

`GET /api/v1/search.json?lat=<y>&lon=<x>&token=<token>`

**Request parameters:**
* `lat`: Latitude (y-coord) in decimal degrees, WGS84 (EPSG 4326) projection.
* `lon`: Longitude (x-coord), same.


#### By address

`GET /api/v1/search.json?query=<address>&context=<path>&token=<token>`

**Request parameters:**
* `query`: The address to look up
* `context` (optional): See notes on `context` parameter above


#### Parcel details from a known path

`GET /api/v1/parcel.json?path=<path>&token=<token>`

**Request parameters:**
* `path`: The canonical path of the parcel in the Loveland system. For example, `/us/mi/wayne/detroit/555`.
