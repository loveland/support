---
weight: 4
category: Adding Data
published: true
intro: How to add data to your map by importing a CSV
title: Add Data via CSV
---
With Site Control you can import data from CSVs and Excel spreadsheets to visualize, query, and work with the data in a parcel map setting.

CSVs need to have a way to match the data to parcels. In order of accuracy, you'll need one or several of these fields: 
* A latitude & longitude for the parcel, in one column or two
* A parcel ID 
* An address, in one column or separated by addres, city, state, and zip

Below is a step-by-step guide to importing data from a CSV or Excel spreadsheet:

1. Create a new map, or, on an existing map, click "Manage Map"
1. Click "Import"
1. Select, or drag, the spreadsheet you'd like to upload
1. Once the data preview appears, select the columns that contain the data you want to match on.
Based on the parcel IDs in your data, we'll try to determine the city you're importing data to -- make sure this is correct and click the city that appears that matches the data you're importing
1. Click "Finish"
1. Click "See Results on Your Map"
1. Standby for importing to complete (alert box in upper right of screen will show progress). 

Below is an animation showing how to connect import a CSV of data:

![qp7IabrGKl.gif]({{site.baseurl}}/img/qp7IabrGKl.gif)

**NOTE:** Once you upload a spreadsheet, Site Control will begin to import data when you click "See The Results on Your Map". Larger datasets will take a while, and there is a max of 200,000 rows of data that you can add to a map.

Once you return to your map, an alert box in the top right of your screen will show progress as data is added to your map. When data importing is complete, you'll see the boundaries that contain imported data shade in a new color to denote that there is now data within that boundary.
