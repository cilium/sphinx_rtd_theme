*********************************
Cilium Documentation Sphinx Theme
*********************************

About
=====

This is a fork from the `Read the Docs Sphinx Theme
<https://github.com/readthedocs/sphinx_rtd_theme>`__.

This theme is included when building Cilium's Documentation. The build system
references it in `Cilium's Documentation/requirements.txt
<https://github.com/cilium/cilium/blob/master/Documentation/requirements.txt>`__.

In the same file, you can also find what version (corresponding to a branch in
the current repository) is being used for Cilium. As of this writing, the
``master`` branch in Cilium uses `branch v1.0
<https://github.com/cilium/sphinx_rtd_theme/tree/v1.0>`__ in this theme. The
``master`` branch in the current repository is unused, other than for
displaying the current ``README.rst``.

Development
===========

To update the theme:

1. Clone this repository
2. Implement your changes on top of the current branch in use
3. Commit and push the changes to your own repository
4. Reference your repository and branch in ``Documentation/requirements.txt``
   in Cilium
5. `Build the documentation locally
   <https://docs.cilium.io/en/latest/contributing/testing/documentation/#testing-documentation>`__
   or create a PR in Cilium to get the preview from the CI

Once your changes are ready, you can create a PR in the current repo (and if
the version of this theme gets updated, create the equivalent PR in Cilium to
update ``Documentation/requirements.txt``).
