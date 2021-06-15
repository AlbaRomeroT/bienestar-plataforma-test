@smoke
Feature: Bienestar login Services
  In order process a order
  As a developer
  I want to make GET request through REST API

  Scenario: make a get request to get healthcare score
    Given A transaction GET event with the path /bienestar/healthindex
    And A transaction GET with header "Authorization" and : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTYyMzE5MTI0MiwiZXhwIjoxNjIzMTk0ODQyLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay15bzJza0Bwcm9kLWJvbGl2YXItY29ubWlnby5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLXlvMnNrQHByb2QtYm9saXZhci1jb25taWdvLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiTFo4N3FJV1E0eFVVN09xT3JnckZoS2hNMjF1MiJ9.vRXLJZR6asVwhYJwir9aqQyEtq7Rn_X3wFdLQke6ntU6VfEOk9nBUa11ieSA0_1Bg65dO9eQs_63vSKZ50LAqxP6_6AvzGNMz1x6Aj9kl_HIdOY4auFTUqSIYjBZaBOZiAn_H9KjkDAHuiZ9heZ4srtfqB-_qeQOtC4SG0k7-yzVEWlp_KzZntzWz0Ng7TpHchZym0kwJb7rzn9ktu7VhENHwg0OsrS00I2ntiphvWwHyt5b2oWBIB1GmP-uQr21AFcC8PGDVLIQmgXoQoo7L3dHf0E8FkNwbsjrLu39EF5NZUgv1HeXRBBZ-pjI8n7Lv9Rfz7nX-QHv2JWGx9cVPQ"
    When I receive a response
    Then I get response code 200
    And I expect response should have a json like
    """
    {
      "body":{
        "data": {
            "score": "518",
            "yesterday": "0",
            "components": {
                "lifestyle": "702",
                "body": "549",
                "feelings": "488"
            }
        }
      }
    }
    
    """
    And I expect response should have a json schema
    """
      {
        "type": "object",
        "properties": {
          "data": {
            "type": "object",
            "properties": {
              "score":{
                "type": "string"
              },
              "yesterday":{
                "type": "string"
              },
              "components": {
                "type": "object",
                "properties": {
                  "lifestyle":{
                    "type": "string"
                  },
                  "body":{
                    "type": "string"
                  },
                  "feelings":{
                    "type": "string"
                  }
                }
              }
            }
          }
        }
      } 
    """