---
weight: 1
category: Importing Data
published: true
intro: Trouble with matching on Import
title: Import Troubleshooting
---
# Trouble with matching on import 

**If you're struggling with the match rate on import, here are a few things to try.**

First things first: there needs to be a column in your dataset that we can match to our parcels. 
You'll need at least one of the following: 
* A parcel ID (this is by far the best, if available)
* Latitude/Longitude
* An address, in one column or separated by address, city, state, and zip


Let's say you have at least one of these but the percent match is still low. 

**Try these basic things:**
* Make sure that you are checking the boxes for the correct geography where your data resides.
* Visually assess your data field - does it look like the rows in the column are in a standard format, and does this look similar to what Loveland has for this parcel when you click it on the map?
* Double-check that you're trying to match the right columns to each other. It helps to label the headers in your dataset beforehand, so that when you go to import you're sure the field containing your parcel IDs is the one you're trying to match to *our* parcel IDs, etc.
* Try using the dropdown boxes and selecting "Don't Match" for all but the field you think is the best (for example, if you had parcel IDs, try setting all address and lat/long dropdowns to "Don't Match").
* Import the dataset anyway, then navigate to Manage Map>Datasets>Edit, and at the bottom of the dataset file you'll see a button to download the "import report". This will show you which rows failed to match, and can often provide insight about what's going wrong. You can always delete and reimport the dataset later, once you've figured out the issue.

**If Using Address or Latitude/Longitude Fields**

In practice, it's unlikely that a dataset being joined by address or lat/long will get a full 100% match because this data tends to be messy, and therefore harder to match. As a rule of thumb, a match rate over about 70% probably indicates that rather than a systemic problem with the join, there are problems with specific rows.

Nonstandard address data ("100-105 Mulholland Dr" vs "100 Mulholland Dr" vs "STE 5 100 Mulholland Dr"), imprecise latitude/longitude that places the point in the wrong parcel, or anything else similarly finicky might be the trouble. In cases like these, the decision lies with you and the context of your project: if 100% matching is crucial, you may want to consider finding parcel numbers or manually editing the problem addresses to conform with Loveland's data.

**If Using Parcel IDs**

If you have a field with parcel numbers but aren't seeing a 100% match rate, this likely means that something's not quite right with their format.

* Check that your parcel ID column format is set to text.
* Save your dataset as a CSV before importing.
* Pull up a parcel in your area of interest in Loveland, and look compare the format of the parcel number there with the format of the parcel number in your dataset. This can provide clues as to why it might not be matching: for example if Loveland's parcel number is 12 digits with double zeroes at the end of every number and yours is 10 and without, you'll have a good idea where to start.

**Quick Excel Tips for Working With Parcel IDs**

* Use [=TEXT(cell, "0000"] where "cell" is the field with the original parcel data and "0000" is the appropriate number of digits in the parcel number. This formula can be used to add leading zeroes as well as to convert a number to text.
* Use [=(cell/10)] to remove a trailing zero of a parcel number. To get rid of two zeroes, [=(cell/100)].

**Still Stumped?**

If you have worked through these steps and still are having trouble, email us at team@makeloveland.com.
We'll be happy to look into it for you!
