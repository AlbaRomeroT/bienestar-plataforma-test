@tradein-service @sequoia @api @happypath @smoke
Feature: TradeIn Transaction Service
  In order process a order
  As a developer
  I want to make sure POST operations through REST API works fine

  Scenario: Start a TradeIn Transaction
    Given A transaction event TRANSFER_OF_TITLE
    And A quote below:
      """
      {
          "id": 18933360,
          "source_type": "pos",
          "country_code": "ES",
          "status": "payment_fulfilled",
          "vendor_id": 3,
          "screening_site_id": 47,
          "store_number": "R435",
          "pos_receipt_number": "20210419R4355828209",
          "legacy_pos_receipt_number": "R4355828209",
          "quoted_at": "2021-04-19T08:27:44.922-07:00",
          "issued_at": "2021-04-19T08:28:01.488-07:00",
          "quoted_total_cents": 37000,
          "current_total_cents": 37000,
          "current_total_currency": "EUR",
          "created_at": "2021-04-19T08:27:44.927-07:00",
          "updated_at": "2021-04-19T08:28:01.489-07:00",
          "payment_approved_at": "2021-04-19T08:28:01.489-07:00"
      }
      """
    And The customer for quote is:
    """
    {
      "id": 18933401,
      "first_name": "POS",
      "last_name": "Customer",
      "address1": "10600 North Tantau Avenue",
      "city": "Cupertino",
      "state": "CA",
      "postal_code": "95014",
      "country": "US",
      "phone": "4081234567",
      "email": "poscustomer@noreply.com",
      "created_at": "2021-04-19T08:27:44.923-07:00",
      "updated_at": "2021-04-19T08:27:44.923-07:00"
    }
    """
    And The quote item #1 is:
    """
    {
      "id": 18933041,
      "external_reference_id": "18933360",
      "quote_id": 18933360,
      "product_id": 107751,
      "global_id": "36e22e7c-ea4d-4ab4-8a4d-dbad8fc5d1c6",
      "status": "payment_fulfilled",
      "transfer_status": "initiated",
      "quoted_at": "2021-04-19T08:27:44.876-07:00",
      "issued_at": "2021-04-19T08:27:51.255-07:00",
      "name": "iPhone 11",
      "line_of_business": "iphone",
      "serial_number": "C6KZV0KYN73M",
      "imei": "356563104149627",
      "mpn": "MWM82QL/A",
      "quoted_value_cents": 37000,
      "quoted_vendor_value_cents": 37000,
      "quoted_value_currency": "EUR",
      "quoted_tier": 1,
      "current_value_cents": 37000,
      "current_vendor_value_cents": 37000,
      "current_value_currency": "EUR",
      "current_tier": 1,
      "payment_amount_cents": 0,
      "payment_amount_currency": "EUR",
      "find_my_device": "off",
      "government_id_status": "not_submitted",
      "trade_delivery_type": "trade_in_kit",
      "transfer_external_reference_id": "18933360",
      "transfer_acknowledged_at": "2021-04-19T08:27:51.253-07:00"
    }
    """
    And Having the below model numbers for item #1:
    """
      [
        "3G864*/A",
        "3G865*/A",
        "3G866*/A",
        "3G867*/A",
        "3G868*/A",
        "3G869*/A",
        "3G882*/A",
        "3G883*/A",
        "3G884*/A",
        "3G885*/A"
      ]
    """
    And Having the below product tags for item #1:
    """
      [
        {
          "id": 4,
          "product_tag_type": "device_type",
          "value": "Mobile Phone",
          "slug": "device_type_mobile_phone",
          "display_order": 3,
          "max_price_cents": 57000,
          "max_price_currency": "EUR",
          "min_price_cents": 57000,
          "min_price_currency": "EUR"
        }
      ]
    """
  And Having the below custom attributes for item #1:
    """
      {
          "MPN": "MWM82QL/A",
          "FMIP_LOCK": "false",
          "FMIP_LOST": "false",
          "DEVICE_VALIDATION": "SUCCESS"
      }
    """
    And Having the below product questions for item #1:
    """
    [
      {
        "id": 478627,
        "text": "Does the device meet the following functional criteria - Device powers on and holds charge as expected. Device doesn't have any missing or third party parts.  Device doesn't have any liquid damage causing functional issues. All buttons are present and functional.",
        "answers": [
          {
            "text": "Yes",
            "value": 1,
            "no_value": false,
            "value_cents": 0
          }
        ],
        "question_id": 113,
        "question_type": "yes_no"
      }
    ]
    """
    And Having the below questions for item #1:
    """
    [
      {
        "question_id": 478629,
        "answer_value": 1
      }
    ]
    """
    When I send POST request to /tradeIn
    When I receive a response
    Then I get response code 200
    And I expect response should have a json like
    """
    {
    "transfer_acknowledged_at": "2021-04-19T08:27:51.253-07:00",
    "transfer_external_reference_id": "18933360"
    }
    """
    And I expect response should have a json schema
    """
     {
        "type": "object",
        "properties": {
          "transfer_acknowledged_at":{
            "type": "string"
          },
          "transfer_external_reference_id":{
            "type": "string"
          }
        }
      } 
    """