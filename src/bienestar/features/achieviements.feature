@smoke
Feature: Bienestar login Services
  In order process a order
  As a developer
  I want to make GET request through REST API for the achievement´s service

  Scenario: make a get request to get all achievements 
    Given A transaction GET event with the path /bienestar/achievement/get-all-achieviements
    And A transaction GET with header "Authorization" and : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTYyMzE5MTI0MiwiZXhwIjoxNjIzMTk0ODQyLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay15bzJza0Bwcm9kLWJvbGl2YXItY29ubWlnby5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLXlvMnNrQHByb2QtYm9saXZhci1jb25taWdvLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiTFo4N3FJV1E0eFVVN09xT3JnckZoS2hNMjF1MiJ9.vRXLJZR6asVwhYJwir9aqQyEtq7Rn_X3wFdLQke6ntU6VfEOk9nBUa11ieSA0_1Bg65dO9eQs_63vSKZ50LAqxP6_6AvzGNMz1x6Aj9kl_HIdOY4auFTUqSIYjBZaBOZiAn_H9KjkDAHuiZ9heZ4srtfqB-_qeQOtC4SG0k7-yzVEWlp_KzZntzWz0Ng7TpHchZym0kwJb7rzn9ktu7VhENHwg0OsrS00I2ntiphvWwHyt5b2oWBIB1GmP-uQr21AFcC8PGDVLIQmgXoQoo7L3dHf0E8FkNwbsjrLu39EF5NZUgv1HeXRBBZ-pjI8n7Lv9Rfz7nX-QHv2JWGx9cVPQ"
    When I receive a response
    Then I get response code 200
    And I expect response should have a json like
    """
  {
    "body": {
        "data": [
            {
                "value": 2,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276f/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276f",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c266276f",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 0,
                "valid": true,
                "achievement": "healthscore_500",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276e/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276e",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c266276e",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 0,
                "valid": true,
                "achievement": "healthscore_750",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 2,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276d/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276d",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c266276d",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 2,
                "valid": true,
                "achievement": "healthscore_500",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276c/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276c",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c266276c",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 1,
                "valid": true,
                "achievement": "healthscore_750",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 2,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276b/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276b",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c266276b",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 1,
                "valid": true,
                "achievement": "healthscore_500",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276a/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c266276a",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c266276a",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 3,
                "valid": true,
                "achievement": "healthscore_750",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662769/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662769",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c2662769",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 2,
                "valid": true,
                "achievement": "healthscore_750",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 2,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662768/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662768",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c2662768",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 3,
                "valid": true,
                "achievement": "healthscore_500",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T05:01:10Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662767/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662767",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c2662767",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 3,
                "valid": true,
                "achievement": "bmi",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T00:40:51Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662766/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662766",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c2662766",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 2,
                "valid": true,
                "achievement": "bmi",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T00:40:51Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662765/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662765",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c2662765",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 1,
                "valid": true,
                "achievement": "bmi",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T00:40:51Z"
            },
            {
                "value": 0,
                "sharing": {
                    "public": true,
                    "user": true,
                    "group": true,
                    "subjects": []
                },
                "creator": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "links": [
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662764/comments",
                        "rel": "http://dacadoo.com/rels#comments"
                    },
                    {
                        "href": "https://api.int.appsb.segurosbolivar.com/2/achievements/60b582132b16fb56c2662764",
                        "rel": "self"
                    }
                ],
                "id": "60b582132b16fb56c2662764",
                "kind": "achievement",
                "expirationTime": "2021-06-01T14:41:35Z",
                "tier": 0,
                "valid": true,
                "achievement": "bmi",
                "subject": {
                    "links": [
                        {
                            "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2",
                            "rel": "self"
                        }
                    ],
                    "id": "60b581f0209a92676d1cd1a2",
                    "kind": "user"
                },
                "modificationTime": "2021-06-01T00:40:51Z"
            }
        ],
        "links": [
            {
                "href": "https://api.int.appsb.segurosbolivar.com/2/users/60b581f0209a92676d1cd1a2/achievements?limit=250&modifiedBefore=4001-01-01T00%3A00%3A00Z",
                "rel": "self"
            }
        ]
    },
    "rawBody": null,
    "hasErrors": false,
    "errors": []
  }
    """
    And I expect response should have a json schema
    """
    {
      "type": "object",
      "properties": {
        "data": {
          "type": "array"
        }
      }
    }
    """