Indexing
========

## Solr Configuration

This is based on the standard Solr configuration from solr 5.3.1, configured to use core autodiscovery and using a configset for configuration.

### Installation

* Install Solr as service
* Use configset called eumssi (need to `ln -s solr_configsets <SOLR_HOME>/configsets`)
* create cores:
 * `http://<server>/solr/admin/cores?action=CREATE&name=content_items&configSet=eumssi`
 * `http://<server>/solr/admin/cores?action=CREATE&name=segments&configSet=eumssi`

## Synchronization

Uses mongo-connector:

* `virtualenv .; . bin/activate; pip -r requirements.txt`
* `./sync_content_items`, `./sync_tweets`, `./sync_segments`
