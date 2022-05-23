*********************************
Cilium Documentation Sphinx Theme
*********************************

About
=====

This is a fork from the `Read the Docs Sphinx Theme
<https://github.com/readthedocs/sphinx_rtd_theme>`__.

This theme is used as a dependency for building Cilium's Documentation. The
build system references it in `Cilium's Documentation/requirements.txt
<https://github.com/cilium/cilium/blob/master/Documentation/requirements.txt>`__,
generated from
`Cilium's Documentation/requirements-min/requirements.txt
<https://github.com/cilium/cilium/blob/main/Documentation/requirements-min/requirements.txt>`__.

These files reference the commit and branch from the current repository that
are used for building Cilium's documentation.

The ``master`` branch in this repository is unused, other than for displaying
the current ``README.rst``.

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
update ``Documentation/requirements-min/requirements.txt`` and regenerate
``Documentation/requirements.txt``).
