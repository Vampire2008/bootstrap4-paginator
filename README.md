# Bootstrap4 Paginator v2.0

---

Bootstrap4 Paginator is a jQuery plugin that simplifies the rendering of Bootstrap Pagination component. It based on [Bootstrap paginator](https://github.com/lyonlai/bootstrap-paginator) It provides methods to automates the update of the pagination status and also some events to notify the status changes within the component. For documentation and examples go [here](https://vampire2008.github.io/bootstrap4-paginator/).

# Changes

v 2.0 (by Kain Stropov)

* Paginator now supports only bootstrap v4.
* Now paginator renders buttons only if needed, not full re-render.
* Removed method `getPages`
* Added method `getOption` that returns value for option or copy of options object
* Added options for ajax call
* Removed alignment options
* Removed mini size option
* Tooltips text now gets from regional settings
* Added options `alwaysDisplayNextPrevButtons` and `alwaysDisplayFirstLastButtons`
* option `shouldShowPage` renamed to `shouldShowPageButton`

v 1.0 (by Yun Lai)

* Add the support for bootstrap v3.
* Make the page change happened in page click event stoppable
* Remove the visibility control within getPages function and leave it with shouldShowPage function.

v 0.6 (by Yun Lai)

* Fix the bug that will cause page out of range when updating the current page together with the total pages.

v 0.5.1 (by Yun Lai)

* Use html entities in default text function instead of plain text to fix the display problem in IE 7-9

