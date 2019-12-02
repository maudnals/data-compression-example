const lz = require("lz-string");

const attestedClaimJSON = {
  request: {
    claim: {
      cType:
        "0xcb26fd97be58d26c3237e237c8ba4d372fbfe2a485676ecaaee7622a860cbe7c",
      contents: { name: "Alice", age: 29 },
      owner: "5Dq36g1DDS14eavJd63R5K6PYdpS1CKp67XrUzuFeMvLxXFU"
    },
    claimOwner: {
      nonce: "40c8b98e-1e26-4494-87ab-50f01bdc9b23",
      hash: "0xd1e4ab005d6739ac1dd85084374edfe22c5beb9eca0d73f97e552d7ead31bf56"
    },
    ctypeHash: {
      nonce: "f07944cf-2daf-4fa7-8cb2-48e22f2e4c3b",
      hash: "0x09ae9aae3fa3f394d7daa3711eca56acff49b56d34d7313d8c75eab73582b51b"
    },
    legitimations: [],
    claimHashTree: {
      name: {
        nonce: "e86b0bd7-b099-4806-be63-61813235e0b2",
        hash:
          "0x30e1489be3428f323311a0c56ebe5533ae82fed867cc00fb6b0fba97ddc84535"
      },
      age: {
        nonce: "25d74a35-78a0-4364-abbd-ecffd507c8c5",
        hash:
          "0x1dc32ce65ab663999a91fb6340f3471553bc9c2ac2ff7dfe27219da9ed5a03a4"
      }
    },
    hash: "0x1daac51ba6605fcc9e12b624abd6404c4877c01cc4a2af369703e5880b7c9d01",
    claimerSignature:
      "0xc0e5043faa9378dcbeb8d3555e7880de797a0a52c1febd4cba8873a022a1ce25d1897fa7830e0873e5032294eb7bc53d82b1960ff1c33af37d0544acb6b4ac02"
  },
  attestation: {
    owner: "5GQYQdtfiPqn6Xew8FKuejuS9e2AvxRwXbq2We72cHZnfQUu",
    claimHash:
      "0x1daac51ba6605fcc9e12b624abd6404c4877c01cc4a2af369703e5880b7c9d01",
    cTypeHash:
      "0xcb26fd97be58d26c3237e237c8ba4d372fbfe2a485676ecaaee7622a860cbe7c",
    revoked: false
  }
};

const str = JSON.stringify(attestedClaimJSON);
const compressed = lz.compress(str);
console.log("COMPRESSED: ", compressed);
const decompressed = lz.decompress(compressed);
console.log("DECOMPRESSED: ", decompressed);
