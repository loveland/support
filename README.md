# [Depreacated -- use landgrid-support instead](https://github.com/loveland/landgrid-support)
## Loveland Support Site

## Writing content using the Prose editor

1. Browse to https://prose.io and log in using your Github account

2. Browse to http://prose.io/#loveland/support (the Loveland team, and the Support project)

3. Browse to the `_articles` folder

4. Either select the article you want to
edit, or create a new file. 

  * To create a new article, copy an existing
  one as a template and save it with a short filename (this will become the URL).

5. You can format text using the toolbar at the top, which uses [Markdown formatting](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). To add images, you can drag and drop in files.

6. You edit the metadata by clicking the icon that looks like a table (several
stacked lines) on the right-hand side of the screen.

There are three important pieces of metadata:

**Intro**: a short sentence or two that introduces the page

**Weight**: A number (between zero and anything) that controls the sort order
of the article. Articles with larger weights "sink" to the bottom of lists.

**Category**
Controls which section of the site

7. When done, save your changes and they'll be published.


# Developing

## Prereqs

You'll need jekyll:

```gem install jekyll```

## Run the site for development

This will run jekyll. It'll watch for changes, automatically build the site,
and serve it locally at http://localhost:4000.

```jekyll serve```

## Where are the files?

Templates are in the root directory. The generated site is in `/_site`.

## Categories

Edit these in `_config.yml`. You'll need to edit the `category-list` up top and
the  prose config at the bottom of the file.
