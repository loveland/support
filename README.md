Loveland Support Site

# Writing content

## The basics

Articles go in the `_articles` folder. To create a new article, copy an existing
one as a template and save it with a short filename (this will become the URL).

There are three important pieces of metadata:

**Intro**: a short sentence or two that introduces the page

**Weight**: A number (between zero and anything) that controls the sort order
of the article. Articles with larger weights "sink" to the bottom of lists.

**Category**
Controls which section of the site

## Using Prose

Browse to https://prose.io, log in, and browse to this project.

Then, browse to the `_articles` folder and either select the article you want to
edit, or create a new file.

You can edit with markdown as well as drag and drop in files. You edit the
metadata by clicking the icon in the right-hand side of the screen. When done,
you commit your changes using the save button.

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
