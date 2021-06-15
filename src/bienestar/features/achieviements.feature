@smoke
Feature: Bienestar login Services
  In order process a order
  As a developer
  I want to make GET request through REST API for the achievement´s service

  Scenario: Start a achievements Transaction
    Given A transaction GET event with the path /aut/bienestar/achievement/get-all-achieviements
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