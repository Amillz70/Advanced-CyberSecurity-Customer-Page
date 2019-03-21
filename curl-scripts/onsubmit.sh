curl "https://acs-v1.endpointlock.com/api/cidlicense" \
--include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer gYEt1ZbJmcXAnB8Vtpe50KymwMu1BNLFcTV0lRB3u97HOXz4GR" \
  --header "X-AdvancedCyberSecurity-SellerId: acs-isgro" \
  --data '{
      "subSellerId": "'"${VERIZON}"'",
      "merchantId": "'"${EMAIL}"'",
      "merchantName": "'"${MERCHANT}"'",
      "adminFirstName": "'"${FIRST}"'",
      "adminLastName": "'"${LAST}"'",
      "adminEmail": "'"${EMAIL}"'",
      "sku": "CYBERC_A"
  }'
