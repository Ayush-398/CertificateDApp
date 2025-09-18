// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

contract CertificateDet {
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin {
        require(msg.sender == admin, "Not an authorized account");
        _;
    }

    struct Certificate {
        string courseName;
        string candidateName;
        string grade;
        string date;
        bool exists;
    }

    mapping(string => Certificate) public certificateDetails;

    event CertificateIssued(
        string indexed certificateId,
        string courseName,
        string candidateName,
        string grade,
        string date
    );

    function issueCertificate(
        string memory _certificateID,
        string memory _courseName,
        string memory _candidateName,
        string memory _grade,
        string memory _date
    ) public onlyAdmin {
        require(bytes(_certificateID).length > 0, "Certificate ID required");
        require(!certificateDetails[_certificateID].exists, "Certificate already exists");

        certificateDetails[_certificateID] = Certificate({
            courseName: _courseName,
            candidateName: _candidateName,
            grade: _grade,
            date: _date,
            exists: true
        });

        emit CertificateIssued(_certificateID, _courseName, _candidateName, _grade, _date);
    }

    function getCertificate(string memory _certificateID)
        public
        view
        returns (
            string memory courseName,
            string memory candidateName,
            string memory grade,
            string memory date,
            bool exists
        )
    {
        Certificate storage cert = certificateDetails[_certificateID];
        return (
            cert.courseName,
            cert.candidateName,
            cert.grade,
            cert.date,
            cert.exists
        );
    }
}