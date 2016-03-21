# OxyGen Slideshow Koken Plugin

* **Author:** [Bjarne Varöystrand](http://varoystrand.se) @BlackSkorpio | [Koken Community Support](http://kokensupport.com)
* **License:** [GPLv3](http://www.gnu.org/licenses/gpl.html)
* **Documentation:** [OxyGen Slideshow Docs](http://docs.kokensupport.com/)
* **Demo:**  [OxyGen Slideshow Docs](http://docs.kokensupport.com/)

A plugin for use with [Koken](http://koken.me) and the [OxyGen theme](http://oxygen.kokensupport.com/).

![OxyGen Slideshow Preview] (preview.jpg)
## Description
Adds a shortcode to embed slideshows with next, previous and play/pause controls in essays or pages.
When in text in your Koken admin area, and when editing an essay or page, click on the slideshow icon with a '+' on it to insert a slideshow with controls.

Style the added controls using their CSS selectors:
### Main container
* .k-content-embed .og-slideshow

### Navigation buttons
* `.og-slideshow .sldshw-prev`
* `.og-slideshow .sldshw-play`
* `.og-slideshow .sldshw-next`

### and their container's CSS selectors:
* `.og-slideshow ul .nav-content li`

### Style the image titles and captions using their CSS selectors:
* `.og-slideshow .k-content-title`
* `.og-slideshow .k-content-caption`

### and their container's CSS selectors:
* `.og-slideshow .k-content-text`

## Installation
* Upload the folder 'OxyGen-slideshow' from the zip you download to the directory `/storage/plugins/`
* Activate the plugin through the `Admin->Settings->Plugins` screen in your Koken admin area.

## Frequently Asked Questions
* Where are the settings?
Users of OxyGen v3 will find settings for showing/hiding the Title and caption in the theme settings panel `Template`.

Slideshow settings for each slideshow, can be set directly inside `Admin->Site ->The slide show gear icon`.

## Changelog

### 1.1
Abandonded using custom divs for the slideshow.

Instead we are now using the same as the core slideshows: `<figure>` `<figcaption>` this way we get to re-use the themes built in classes. But still be able to set unciqe styles to each slideshow.

### 1.0
Forked bigflannel-Slideshow-Embed and tweeked it a bit more to "our liking".

It is mostly the same plugin as before with small changes to the UX that we find making a better experience for the end user and admin.

* Slideshows auto play, as you would expect, since this is the default state for the built in slideshows.
* Click on a slideshow image opens up in lightbox view instead of advancing the slideshow.
* Since we opens up the lightbox on image click, we removed the title link.
* If no title is present for an image, we display the filename.
* The "next"/"previous" buttons only displays back and forward arrows instead of both arrows and text.
* We added `.sldshw-prev`, `.sldshw-play` & `.sldshw-next` to the parent `<li>` that holds the navigation items to make it easier to style everything to your liking.

As you can see there is not musch that is different, so wich one you choose to use is solely up to you :D

### Original Author
* [Mike Hartley, bigflannel](http://bigflannel.com)
