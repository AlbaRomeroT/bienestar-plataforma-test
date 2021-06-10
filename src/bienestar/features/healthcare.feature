@smoke
Feature: Bienestar login Services
  In order process a order
  As a developer
  I want to make GET request through REST API

  Scenario: Start a TradeIn Transaction
    Given A transaction GET event with the path /stage/bienestar/dacadoo/healthindex
    When I receive a response
    Then I get response code 200
    And I expect response should have a json like
    """
    {
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
    """
    And I expect response should have a json schema
    """
     {
        "data": {
          "score":{
            "type": "string"
          },
          "yesterday":{
            "type": "string"
          },
          "components": {
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
        },
        "type": "object"
      } 
    """