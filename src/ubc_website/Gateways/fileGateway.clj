(ns ubc-website.Gateways.fileGateway)

(defprotocol fileGateway
  (file-names [this])
  (file-contents [this file-name]))

(deftype realFileGateway []
  fileGateway
  (file-names [this])
  (file-contents [this file-name]))
