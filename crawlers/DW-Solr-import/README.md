# DW data importer

This is a script that imports items from Solr (in DW format) to MongoDB according to the EUMSSI platform format.

## Installation

### prerequisites
- Python >= 2.7  
- virtualenv  
- EUMSSI platform (MongoDB)

### setup
```bash
cd crawlers/DW-Solr-import
. bin\activate
pip install -r requirements
```

## Use
- run `python DW_Solr_import.py <Solr URI>`
 - run once (manually) to import full collection
