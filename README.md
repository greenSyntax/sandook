# Sandook 🍕
In-House Media Storage Service

![SANDOOK_POSTER_IMAGE](https://github.com/greenSyntax/sandook/blob/main/sandook-poster.jpeg)

### Features
- [x] Base64 Encoded Image Copression
- [ ] Upload Image in bucket
- [ ] Support for Other Media/MIME
- [ ] Add Authorization Support
- [ ] Dashboard for Media

### Request
```
curl --location --request POST 'localhost:5000/upload' \
--form 'image=@"/Users/abhishek/Documents/bJoRJhz.png"'
```

### Response
```
{
    "status": true,
    "data": {
        "timestamp": "2021-05-15T13:49:45.289Z",
        "_id": "609fd18470aa7232c0259644",
        "name": "image-1621086596644.png",
        "type": "image",
        "base64_data": "iVBORw0KGgoAAAANSUhEUgAABAMAAAHtCAYAAABsyLd7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iArg9WkWTtlrkhS8li2PDYDBiZaWPE0crbflyW1fgshGUoFVMEieYOMKoCK0NhYPuwg4OHzrE3Py8Ly9zgBLanRY4FQi8bSgVUIjTvhdhMBh4XzUkxoQSZ3PKIqvLWsvC12q0um10HDPKCrRW7D1tL9icIh+Rttp05+ZJ44THPuHxG47hz372s5uWvcyCAfdxGw6HMhwOZTAYyGAwkOFwKHmeS1mWYq2VWduiuXLzP7EiYsXZQoYrx6Qc9UVcLuJyyVaXRLJSJHeSWSdF6UQy/1eUIiPnpBCR0oqMVoZiC/84E/H3pixFykIkH/nfEJHMluJERMTKysqKFLnIaGjFOZFSREZ5X7L8kIgcEJEDUrpjUtqhSJ6LFKUMZCR9GUlmnZSFiBORpeFQ+mJlKP6xs/4YDqwck1JEiiITKYcibiRiByJ2JP3DByTPhjIclZKJyEhElguRpUEuZTg+kUIO779DxBVSDFf9FzuRYX8g1v9TstyfjxOR1f5QlpZXpXS2PscyWxY7WhbJC/+VUoiVUqTwP5FbkcyKHDpwUMSJFJkTW4aTcFZsUUpZl6xEte8hL27t6LXVnl9373d0g1jDIoHWSlhbl5by8UaKPwoUrIguukOx0oLMuDEZ/616+yOrRQCkosMfiEVVmCgM0tWCGKEnpdyIdDsCWRAh0nrCz30QKRjiiGQ9LFeQ7f8jW++pX/YK7tFbmy0mJUBChUktSJqy9++Ss454O4RhlcloHWdFptjDHkubC8vIwrbE3Wvjroc/J=",
        "__v": 0
    }
}
```
