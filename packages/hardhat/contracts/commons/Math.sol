// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Math {
    function min(uint256 _a, uint256 _b) internal pure returns (uint256) {
        return _a < _b ? _a : _b;
    }
}
