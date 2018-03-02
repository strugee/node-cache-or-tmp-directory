/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

'use strict';

var getCacheDir = require('cache-directory'),
    path = require('path'),
    tmpdir = require('os').tmpdir();

function cacheOrTmpDir(appName) {
	var cacheDir = getCacheDir(appName);

	if (cacheDir) return cacheDir;

	return path.join(tmpdir, 'node-cache-or-tmp-dir', appName);
}

module.exports = cacheOrTmpDir;
