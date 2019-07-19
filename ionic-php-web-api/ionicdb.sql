-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2019 at 08:30 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ionicdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `negara` varchar(255) NOT NULL,
  `ibukota` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `negara`, `ibukota`) VALUES
(2, 'Indonesia', 'Jakarta'),
(3, 'Thailand', 'Bangkok'),
(4, 'Vietnam', 'Hanoy'),
(5, 'Singapore', 'Singapura'),
(6, 'Inggris', 'London'),
(7, 'Italia', 'Roma'),
(8, 'India', 'Mumbai'),
(9, 'Jerman', 'Munich'),
(10, 'Belanda', 'Ajax'),
(11, 'Portugal', 'Porto'),
(12, 'Afghanistan', 'Kabul'),
(13, 'Iran', 'Teheran');

-- --------------------------------------------------------

--
-- Table structure for table `teknologi`
--

CREATE TABLE `teknologi` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teknologi`
--

INSERT INTO `teknologi` (`id`, `name`, `description`) VALUES
(3, 'Nuxt.JS', 'baru lagi nih'),
(4, 'React.JS', 'belajar React.JS'),
(5, 'Babel.JS', 'belajar Babel.JS'),
(6, 'Node.JS', 'Belajar Node.JS'),
(7, 'Flutter', 'Belajar Flutter');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teknologi`
--
ALTER TABLE `teknologi`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `teknologi`
--
ALTER TABLE `teknologi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
