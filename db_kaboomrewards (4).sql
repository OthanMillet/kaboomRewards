-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2017 at 12:40 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kaboomrewards`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_accountconfirmation`
--

CREATE TABLE `tbl_accountconfirmation` (
  `id` varchar(60) NOT NULL,
  `employee_id` varchar(60) NOT NULL,
  `company_id` varchar(60) NOT NULL,
  `name` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `meta_data` text NOT NULL,
  `sent` varchar(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_accountconfirmation`
--

INSERT INTO `tbl_accountconfirmation` (`id`, `employee_id`, `company_id`, `name`, `email`, `meta_data`, `sent`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-1002', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'annemargarette.enriquez@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-2', '2017-1003', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'roydan.fernandez@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-3', '2017-1004', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'julieane.gatdula@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-4', '2017-1005', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ma.bernadette.ibe@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-5', '2017-1006', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jessicaelaine.murillo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-6', '2017-1007', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'joannancy.natividad@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-7', '2017-1008', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'gerardfrancis.ogad@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-8', '2017-1009', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'sergei.reyes@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-9', '2017-1010', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'mariamarcella.martinez@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-10', '2017-1011', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'larrakarysse.bautista@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-11', '2017-1012', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'margarette.juanillo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-12', '2017-1013', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'edelyn.abalos@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-13', '2017-1014', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jonphilip.atienza@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-14', '2017-1015', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'joyandrew.ballesteros@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-15', '2017-1016', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'rhea.bengson@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-16', '2017-1017', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'johnandrew.cacacho@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-17', '2017-1018', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ralphjoseph.cajanding@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-18', '2017-1019', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'nina.cantiller@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-19', '2017-1020', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'hannahmae.carbonera@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-20', '2017-1021', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'mariafelissa.castillo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-21', '2017-1022', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'julieann.clemente@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-22', '2017-1023', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jesieca.coloma@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-23', '2017-1024', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'maryantonette.cruz@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-24', '2017-1025', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ronaldjohn.escasa@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-25', '2017-1026', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'lian.fernando@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-26', '2017-1027', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'arjay.garcia@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-27', '2017-1028', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'reggie.irinco@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-28', '2017-1029', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'josephine.king@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-29', '2017-1030', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ryoichi.lindo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-30', '2017-1031', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'marycris.nava@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-31', '2017-1032', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'glaizamae.orinday@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-32', '2017-1033', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'charissebernadette.ortiz@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-33', '2017-1034', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'marlon.vale@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-34', '2017-1035', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'dyancaroll.villanueva@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-35', '2017-1036', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'myra.villegas@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-36', '2017-1037', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ronald.yap@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-37', '2017-1038', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'myradel.zapatero@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-38', '2017-1039', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'kathleen.matienzo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-39', '2017-1040', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'neneth.david@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-40', '2017-1041', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'richarderic.belda@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-41', '2017-1042', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jonasser.abdul@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-42', '2017-1043', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'rosendo.abejo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-43', '2017-1044', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'wilfredo.abella@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-44', '2017-1045', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'eddie.akim@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-45', '2017-1046', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'paulandrew.arboleda@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-46', '2017-1047', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'danarochelo.balboa@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-47', '2017-1048', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'johnpaul.bautista@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-48', '2017-1049', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'john-david.bories@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-49', '2017-1050', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ferdinand.cabel@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-50', '2017-1051', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'lesterjohn.camson@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-51', '2017-1052', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'edizon.cruzada@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-52', '2017-1053', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ariel.deocareza@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-53', '2017-1054', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'john.enterina@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-54', '2017-1055', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'vanhalen.estrella@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-55', '2017-1056', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jeffrey.joaquin@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-56', '2017-1057', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'vincentallan.lao@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-57', '2017-1058', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'raymond.lauresta@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-58', '2017-1059', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'anthonyryan.mendoza@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-59', '2017-1060', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'teodulo.nase@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-60', '2017-1061', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'lawrence.noriega@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-61', '2017-1062', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'gilbert.pasia@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-62', '2017-1063', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'fedoraconstancia.pineda@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-63', '2017-1064', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ivan.puli@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-64', '2017-1065', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'rommeljose.ramirez@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-65', '2017-1066', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'raymond.salvador@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-66', '2017-1067', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'joe-roman.sangabriel@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-67', '2017-1068', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'francisinrico.torrevillas@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-68', '2017-1069', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'vilfred.villaraiz@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-69', '2017-1070', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'charmaignemae.aliwalas@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-70', '2017-1071', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'noah.arias@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-71', '2017-1072', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'joseteresito.artizada@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-72', '2017-1073', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jehtronjay-ar.barredo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-73', '2017-1074', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'gizzelene.benedicto@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-74', '2017-1075', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'claresemanoa.bernardo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-75', '2017-1076', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'carlamaris.bigay@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-76', '2017-1077', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ramon.boco@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-77', '2017-1078', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jhoanamarie.bruce@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-78', '2017-1079', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'staceywinda.callao@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-79', '2017-1080', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'rowena.calubad@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-80', '2017-1081', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'roselle.camatis@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-81', '2017-1082', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'kaselyn.camba@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-82', '2017-1083', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'glenn.capanas@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-83', '2017-1084', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'markaaron.cerezo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-84', '2017-1085', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'jerome.damicog@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-85', '2017-1086', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'loremclarion.dejesus@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-86', '2017-1087', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'joselito.deleon@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-87', '2017-1088', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'claire.delatorre@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-88', '2017-1089', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'justine.dizer@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-89', '2017-1090', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'marklouie.esta@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-91', '2017-1092', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ralph.flores@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-92', '2017-1093', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'norlenecheysser.ganotisi@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-93', '2017-1094', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'haide.garrido@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-94', '2017-1095', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'michael.genson@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-95', '2017-1096', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'miguel.gregorio@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-96', '2017-1097', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'lesterarvin.josef@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-97', '2017-1098', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'paulryan.lavarias@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-98', '2017-1099', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'ma.angelica.libed@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-99', '2017-1100', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'vincentstephen.lihao@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-100', '2017-1101', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'kroith.lladoc@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-101', '2017-1102', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'elvie.llaguno@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-102', '2017-1103', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'christel.magpayo@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-103', '2017-1104', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'markanthony.mallari@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-104', '2017-1105', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'alannorly.mallari@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-105', '2017-1106', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'elainejhanerubelle.maluto@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-106', '2017-1107', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'argielyn.mancera@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-107', '2017-1108', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'angelina.manio@rewards.com', '', '0'),
('356a192b7913b04c54574d18c28d46e6395428ab-108', '2017-1109', '356a192b7913b04c54574d18c28d46e6395428ab', '0', 'mykajohara.manzano@rewards.com', '', '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id` varchar(50) NOT NULL,
  `name` varchar(300) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `capabilities` text NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` int(1) NOT NULL,
  `date` varchar(20) NOT NULL,
  `picture` varchar(60) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id`, `name`, `username`, `password`, `capabilities`, `email`, `status`, `date`, `picture`) VALUES
('77de68daecd823babbb58edb1c8e14d7106e83bb', 'admin2', 'admin2', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '1', 'rufo.gabrillo@gmail.com', 1, '2017-06-06 08:00:35', '0'),
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', 'admin1', 'admin1', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '1', 'rufo.gabrillo@gmail.com', 1, '2017-06-06 06:45:42', '0'),
('da4b9237bacccdf19c0760cab7aec4a8359010b0', 'Admin', 'Admin2017', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'admin', 'rufo.gabrillo@rnrdigitalconsultancy.com', 1, '2017-05-21 22:09:17', 'da4b9237bacccdf19c0760cab7aec4a8359010b0_1498394229.rng'),
('356a192b7913b04c54574d18c28d46e6395428ab', 'admin2', 'admin2', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', '1', 'rufo.gabrillo@gmail.com', 1, '2017-06-06 07:59:13', '0'),
('1b6453892473a467d07372d45eb05abc2031647a', 'rufo', 'admin_rufo', '48d59ec36250f5ce34c5278675660b198355faa0', '1', 'rufo.gabrillo@gmail.com', 1, '2017-06-06 19:50:19', '0'),
('ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'demo admin', 'demo1', '10f71961bd11dd33c1c95c771b98cf0e09d57b7c', '1', 'rufo.gabrillo@gmail.com', 1, '2017-06-11 06:32:32', '0'),
('c1dfd96eea8cc2b62785275bca38ac261256e278', 'Rufo', 'Admin3', '32ca9fc1a0f5b6330e3f4c8c1bbecde9bedb9573', 'sample', 'rufo.gabrillo@gmail.com', 1, '2017-06-21 20:34:41', '0'),
('902ba3cda1883801594b6e1b452790cc53948fda', 'Juan Dela Cruz', 'adminJDC1', 'be3d3a042bfbd543be1fcfd223f883a86cf514dd', '', 'rufo.gabrillo@gmail.com', 1, '2017-06-23 18:47:31', '0'),
('fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Juan Dela Cruz', 'AdminJDC2', 'ae446272974240037d268f3b43fa593cc0b79b8b', '', 'f', 1, '2017-06-23 18:51:24', '0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_company`
--

CREATE TABLE `tbl_company` (
  `id` varchar(60) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `address` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact_number` varchar(100) NOT NULL,
  `status` int(1) NOT NULL,
  `date` varchar(20) NOT NULL,
  `logo` varchar(60) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_company`
--

INSERT INTO `tbl_company` (`id`, `company_name`, `address`, `email`, `contact_number`, `status`, `date`, `logo`) VALUES
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', 'RufoCorp Inc.', 'Macabito Calasiao Pangasinan', 'rufo.gabrillo@gmail.com.ph', '09484993951', 1, '2017-07-01 18:44:14', 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c_1498983332.rnr'),
('356a192b7913b04c54574d18c28d46e6395428ab', 'Boom', '84, Macabito', 'rufo.gabrillo@gmail.com', '9484993958', 1, '2017-07-04 21:35:26', 'logo.png'),
('da4b9237bacccdf19c0760cab7aec4a8359010b0', 'cedric inc. literature', 'dyan lang', 'as@gmail.com', '09180384531', 1, '2017-07-13 18:40:32', 'logo.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employee`
--

CREATE TABLE `tbl_employee` (
  `id` varchar(50) NOT NULL,
  `employee_id` varchar(50) DEFAULT NULL,
  `company_id` varchar(50) DEFAULT NULL,
  `family_name` varchar(100) DEFAULT NULL COMMENT 'name format is in object',
  `given_name` varchar(100) DEFAULT NULL,
  `middle_name` varchar(100) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `gender` varchar(6) DEFAULT NULL COMMENT 'male/female',
  `date_of_birth` varchar(10) DEFAULT NULL,
  `contact_number` varchar(100) DEFAULT NULL,
  `email_address` varchar(100) DEFAULT NULL,
  `address` varchar(300) DEFAULT NULL,
  `picture` varchar(60) DEFAULT NULL,
  `position` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `date` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_employee`
--

INSERT INTO `tbl_employee` (`id`, `employee_id`, `company_id`, `family_name`, `given_name`, `middle_name`, `nickname`, `gender`, `date_of_birth`, `contact_number`, `email_address`, `address`, `picture`, `position`, `password`, `status`, `date`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab-0', '2017-1091', '356a192b7913b04c54574d18c28d46e6395428ab', 'Gabrillo', 'Rufo 2', 'Narcisi', 'JR', 'Male', '01/26/1993', '09484993951', 'jeramierose.fabiania@rewards.com', 'Calasiao', 'avatar.jpg', 'President', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 1, '2017-07-06 22:42:14'),
('356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-1001', '356a192b7913b04c54574d18c28d46e6395428ab', 'Gabrillo', 'Rufo', 'Narcisi', 'Employee 1', 'Female', '11/11/1992', '09484993950', 'kristy.aroa@rewards.com.ph', 'Macabito Calasiao Pangasinan 1', '356a192b7913b04c54574d18c28d46e6395428ab-1_1499763260.rnr', 'Employee', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 1, '2017-07-07 09:11:46');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employer`
--

CREATE TABLE `tbl_employer` (
  `id` varchar(50) NOT NULL,
  `company_id` varchar(60) NOT NULL,
  `name` varchar(300) NOT NULL,
  `email` varchar(100) NOT NULL,
  `constact_number` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `picture` varchar(60) NOT NULL,
  `status` int(1) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_employer`
--

INSERT INTO `tbl_employer` (`id`, `company_id`, `name`, `email`, `constact_number`, `username`, `password`, `picture`, `status`, `date`) VALUES
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c-0', 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', 'Rufo N. Gabrillo Jr.', 'rufo.gabrillo@gmail.com.ph', '09484993951', 'AdminRufo1', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c-0_1499085814.rnr', 1, '2017-07-01 18:44:14'),
('356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab', 'boom', 'rufo.gabrillo@gmail.com', '09484993958', 'BoomBoom1', '5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8', 'avatar.png', 1, '2017-07-04 21:35:26'),
('da4b9237bacccdf19c0760cab7aec4a8359010b0-0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'Cedric', 'as.gmail.com', '091078485682', 'CedricAlmandres9', '4a027e76704556fb8cd5481ebe42c062edd41d22', 'avatar.png', 1, '2017-07-13 18:40:32');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_logs`
--

CREATE TABLE `tbl_logs` (
  `id` varchar(50) NOT NULL,
  `account` varchar(50) NOT NULL,
  `remarks` text NOT NULL,
  `date` varchar(20) NOT NULL,
  `header` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_logs`
--

INSERT INTO `tbl_logs` (`id`, `account`, `remarks`, `date`, `header`) VALUES
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name is updated to Rufo 1 Narcisi Gabrillo.', '2017-07-11 09:27:00', 'Update'),
('356a192b7913b04c54574d18c28d46e6395428ab', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Nickname is updated to Rufo 2.', '2017-07-11 13:17:39', 'Update'),
('da4b9237bacccdf19c0760cab7aec4a8359010b0', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Nickname is updated to Rufo.', '2017-07-11 13:19:24', 'Update'),
('77de68daecd823babbb58edb1c8e14d7106e83bb', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Phone is updated to 09484993951.', '2017-07-11 13:29:04', 'Update'),
('1b6453892473a467d07372d45eb05abc2031647a', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email is updated to kristy.aroa@rewards.com.ph.', '2017-07-11 13:30:47', 'Update'),
('ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email is updated to kristy.aroa@rewards.com.ph.', '2017-07-11 13:31:27', 'Update'),
('c1dfd96eea8cc2b62785275bca38ac261256e278', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email is updated to kristy.aroa@rewards.com.ph.', '2017-07-11 13:31:41', 'Update'),
('902ba3cda1883801594b6e1b452790cc53948fda', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Password updated', '2017-07-11 16:57:55', 'Update'),
('fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Product categories are updated to ["one","twi","three","four","five"].', '2017-07-12 08:16:42', 'Update'),
('0ade7c2cf97f75d009975f4d720d1fa6c19f4897', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Product categories are updated to ["one","twi","three","four","five","six"].', '2017-07-12 08:17:08', 'Update'),
('b1d5781111d84f7b3fe45a0852e59758cd7a87e5', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Product categories are updated to ["one","twi","three","four","five","six","seven"].', '2017-07-12 08:17:20', 'Update'),
('17ba0791499db908433b80f37c5fbc89b870084b', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Product status is updated to Pending.', '2017-07-12 08:17:29', 'Update'),
('7b52009b64fd0a2a49e6d8a939753077792b0554', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Product status is updated to Published.', '2017-07-12 08:17:34', 'Update'),
('bd307a3ec329e10a2cff8fb87480823da114f8f4', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Product picture is updated to fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f_1499818674.rnr.', '2017-07-12 08:17:54', 'Update'),
('fa35e192121eabf3dabf9f5ea6abdbcbc107ac3b', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Password updated', '2017-07-12 22:56:45', 'Update'),
('f1abd670358e036c31296e66b3b66c382ac00812', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name is updated to Kristy Narcisi Aroa.', '2017-07-13 23:22:07', 'Update'),
('1574bddb75c78a6fd2251d61e2993b5146201319', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name is updated to Kristy Pascual Aroa.', '2017-07-13 23:22:18', 'Update'),
('0716d9708d321ffb6a00818614779e779925365c', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name has been changed.', '2017-07-14 10:25:09', 'Accepted Request'),
('9e6a55b6b4563e652a23be9d623ca5055c356940', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name has been changed.', '2017-07-14 10:33:27', 'Accepted Request'),
('b3f0c7f6bb763af1be91d9e74eabfeb199dc1f1f', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Name has been changed.', '2017-07-14 10:34:13', 'Accepted Request'),
('91032ad7bbcb6cf72875e8e8207dcfba80173f7c', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Name has been changed.', '2017-07-14 10:52:13', 'Accepted Request'),
('472b07b9fcf2c2451e8781e944bf5f77cd8457c8', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name has been changed.', '2017-07-14 10:55:03', 'Accepted Request'),
('12c6fc06c99a462375eeb3f43dfd832b08ca9e17', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Name has been changed.', '2017-07-14 10:55:15', 'Accepted Request'),
('d435a6cdd786300dff204ee7c2ef942d3e9034e2', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Nickname has been changed.', '2017-07-14 10:55:57', 'Accepted Request'),
('4d134bc072212ace2df385dae143139da74ec0ef', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Nickname has been changed.', '2017-07-14 10:56:10', 'Accepted Request'),
('f6e1126cedebf23e1463aee73f9df08783640400', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Nickname has been changed.', '2017-07-14 10:56:48', 'Accepted Request'),
('887309d048beef83ad3eabf2a79a64a389ab1c9f', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Nickname has been changed.', '2017-07-14 10:56:48', 'Accepted Request'),
('bc33ea4e26e5e1af1408321416956113a4658763', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Nickname has been changed.', '2017-07-14 10:57:00', 'Accepted Request'),
('0a57cb53ba59c46fc4b692527a38a87c78d84028', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Nickname has been changed.', '2017-07-14 10:57:01', 'Accepted Request'),
('7719a1c782a1ba91c031a682a0a2f8658209adbf', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Position has been changed.', '2017-07-14 10:57:54', 'Accepted Request'),
('22d200f8670dbdb3e253a90eee5098477c95c23d', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Contact Number has been changed.', '2017-07-14 11:03:03', 'Accepted Request'),
('632667547e7cd3e0466547863e1207a8c0c0c549', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Contact Number has been changed.', '2017-07-14 11:03:10', 'Accepted Request'),
('cb4e5208b4cd87268b208e49452ed6e89a68e0b8', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Date  of birth has been changed.', '2017-07-14 11:04:27', 'Accepted Request'),
('b6692ea5df920cad691c20319a6fffd7a4a766b8', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Date  of birth has been changed.', '2017-07-14 11:04:43', 'Accepted Request'),
('f1f836cb4ea6efb2a0b1b99f41ad8b103eff4b59', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email has been changed.', '2017-07-14 11:09:16', 'Accepted Request'),
('972a67c48192728a34979d9a35164c1295401b71', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email has been changed.', '2017-07-14 11:09:23', 'Accepted Request'),
('fc074d501302eb2b93e2554793fcaf50b3bf7291', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email has been changed.', '2017-07-14 11:09:29', 'Accepted Request'),
('cb7a1d775e800fd1ee4049f7dca9e041eb9ba083', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Address has been changed.', '2017-07-14 11:10:19', 'Accepted Request'),
('5b384ce32d8cdef02bc3a139d4cac0a22bb029e8', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Gender has been changed.', '2017-07-14 11:11:07', 'Accepted Request'),
('ca3512f4dfa95a03169c5a670a4c91a19b3077b4', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Picture has been changed.', '2017-07-14 11:12:01', 'Accepted Request'),
('af3e133428b9e25c55bc59fe534248e6a0c0f17b', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Picture has been changed.', '2017-07-14 11:12:07', 'Accepted Request'),
('761f22b2c1593d0bb87e0b606f990ba4974706de', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Picture has been changed.', '2017-07-14 11:12:10', 'Accepted Request'),
('92cfceb39d57d914ed8b14d0e37643de0797ae56', '', '', '2017-07-14 11:18:40', 'Deactivate'),
('0286dd552c9bea9a69ecb3759e7b94777635514b', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email has been changed.', '2017-07-14 11:20:46', 'Accepted Request'),
('98fbc42faedc02492397cb5962ea3a3ffc0a9243', '', 'Request to change has been cancelled.', '2017-07-14 11:34:32', 'Cancelled Request'),
('fb644351560d8296fe6da332236b1f8d61b2828a', '', 'Request to change has been cancelled.', '2017-07-14 11:35:25', 'Cancelled Request'),
('fe2ef495a1152561572949784c16bf23abb28057', '', 'Request to change has been cancelled.', '2017-07-14 11:37:20', 'Cancelled Request'),
('827bfc458708f0b442009c9c9836f7e4b65557fb', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Request to change has been cancelled.', '2017-07-14 11:37:57', 'Cancelled Request'),
('64e095fe763fc62418378753f9402623bea9e227', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name has been changed.', '2017-07-14 12:24:45', 'Accepted Request'),
('2e01e17467891f7c933dbaa00e1459d23db3fe4f', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356', '2017-07-14 12:37:53', 'Points'),
('e1822db470e60d090affd0956d743cb0e7cdf113', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name has been changed.', '2017-07-14 13:01:09', 'Accepted Request'),
('b7eb6c689c037217079766fdb77c3bac3e51cb4c', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Name has been changed.', '2017-07-14 13:23:07', 'Accepted Request'),
('a9334987ece78b6fe8bf130ef00b74847c1d3da6', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Email has been changed.', '2017-07-14 13:23:10', 'Accepted Request'),
('c5b76da3e608d34edb07244cd9b875ee86906328', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356', '2017-07-14 14:25:06', 'Points'),
('80e28a51cbc26fa4bd34938c5e593b36146f5e0c', '356a192b7913b04c54574d18c28d46e6395428ab-1', '356', '2017-07-14 14:25:27', 'Points'),
('8effee409c625e1a2d8f5033631840e6ce1dcb64', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356', '2017-07-14 15:17:49', 'Points'),
('54ceb91256e8190e474aa752a6e0650a2df5ba37', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356', '2017-07-14 15:18:50', 'Points'),
('9109c85a45b703f87f1413a405549a2cea9ab556', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356', '2017-07-14 15:20:04', 'Points'),
('667be543b02294b7624119adc3a725473df39885', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356', '2017-07-14 15:20:32', 'Points'),
('5a5b0f9b7d3f8fc84c3cef8fd8efaaa6c70d75ab', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:32:08', 'Points Request'),
('e6c3dd630428fd54834172b8fd2735fed9416da4', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:32:51', 'Points Request'),
('6c1e671f9af5b46d9c1a52067bdf0e53685674f7', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:33:26', 'Points Request'),
('511a418e72591eb7e33f703f04c3fa16df6c90bd', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:33:55', 'Points Request'),
('a17554a0d2b15a664c0e73900184544f19e70227', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:34:05', 'Points Request'),
('c66c65175fecc3103b3b587be9b5b230889c8628', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:42:20', 'Points Request'),
('2a459380709e2fe4ac2dae5733c73225ff6cfee1', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:42:24', 'Points Request'),
('59129aacfb6cebbe2c52f30ef3424209f7252e82', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Points has been added.', '2017-07-14 16:42:29', 'Points Request'),
('4d89d294cd4ca9f2ca57dc24a53ffb3ef5303122', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Points has been added.', '2017-07-14 17:29:32', 'Points Request'),
('b4c96d80854dd27e76d8cc9e21960eebda52e962', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Points has been added.', '2017-07-14 17:30:25', 'Points Request'),
('a72b20062ec2c47ab2ceb97ac1bee818f8b6c6cb', '902ba3cda1883801594b6e1b452790cc53948fda', 'Product picture is updated to 902ba3cda1883801594b6e1b452790cc53948fda_1502285038.rnr.', '2017-08-09 21:23:58', 'Update'),
('b7103ca278a75cad8f7d065acda0c2e80da0b7dc', 'c1dfd96eea8cc2b62785275bca38ac261256e278', 'Product picture is updated to c1dfd96eea8cc2b62785275bca38ac261256e278_1502285100.rnr.', '2017-08-09 21:25:00', 'Update'),
('d02560dd9d7db4467627745bd6701e809ffca6e3', 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'Product picture is updated to ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4_1502285112.rnr.', '2017-08-09 21:25:12', 'Update'),
('c097638f92de80ba8d6c696b26e6e601a5f61eb7', '1b6453892473a467d07372d45eb05abc2031647a', 'Product picture is updated to 1b6453892473a467d07372d45eb05abc2031647a_1502285124.rnr.', '2017-08-09 21:25:24', 'Update'),
('35e995c107a71caeb833bb3b79f9f54781b33fa1', '77de68daecd823babbb58edb1c8e14d7106e83bb', 'Product picture is updated to 77de68daecd823babbb58edb1c8e14d7106e83bb_1502285146.rnr.', '2017-08-09 21:25:46', 'Update'),
('1f1362ea41d1bc65be321c0a378a20159f9a26d0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'Product picture is updated to da4b9237bacccdf19c0760cab7aec4a8359010b0_1502285163.rnr.', '2017-08-09 21:26:03', 'Update'),
('450ddec8dd206c2e2ab1aeeaa90e85e51753b8b7', '356a192b7913b04c54574d18c28d46e6395428ab', 'Product picture is updated to 356a192b7913b04c54574d18c28d46e6395428ab_1502285179.rnr.', '2017-08-09 21:26:19', 'Update');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orderdetails`
--

CREATE TABLE `tbl_orderdetails` (
  `id` varchar(50) NOT NULL,
  `qty` int(11) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `order_id` varchar(50) NOT NULL,
  `order_date` varchar(50) NOT NULL,
  `order_delivered` varchar(50) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_orderdetails`
--

INSERT INTO `tbl_orderdetails` (`id`, `qty`, `product_id`, `order_id`, `order_date`, `order_delivered`, `status`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab-1-12', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', '902ba3cda1883801594b6e1b452790cc53948fda', '2017-07-18 23:11:26', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-11', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', 'c1dfd96eea8cc2b62785275bca38ac261256e278', '2017-07-18 23:10:15', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-10', 1, 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', '2017-07-18 23:05:41', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-9', 4, '77de68daecd823babbb58edb1c8e14d7106e83bb', 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', '2017-07-18 23:05:41', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-8', 3, 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', '77de68daecd823babbb58edb1c8e14d7106e83bb', '2017-07-18 22:33:07', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-7', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', '77de68daecd823babbb58edb1c8e14d7106e83bb', '2017-07-18 22:33:07', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-6', 1, 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', '77de68daecd823babbb58edb1c8e14d7106e83bb', '2017-07-18 22:33:07', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-5', 5, '77de68daecd823babbb58edb1c8e14d7106e83bb', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', '2017-07-18 12:24:46', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-4', 5, 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', '2017-07-18 12:24:46', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-3', 5, '77de68daecd823babbb58edb1c8e14d7106e83bb', '356a192b7913b04c54574d18c28d46e6395428ab', '2017-07-18 11:56:47', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-2', 5, 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', '356a192b7913b04c54574d18c28d46e6395428ab', '2017-07-18 11:56:47', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-0', 5, 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', '2017-07-18 11:54:42', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-1', 5, '77de68daecd823babbb58edb1c8e14d7106e83bb', 'b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', '2017-07-18 11:54:42', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-13', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', '2017-07-18 23:11:57', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-14', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', '0ade7c2cf97f75d009975f4d720d1fa6c19f4897', '2017-07-18 23:12:12', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-15', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', 'b1d5781111d84f7b3fe45a0852e59758cd7a87e5', '2017-07-18 23:19:17', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-16', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', '17ba0791499db908433b80f37c5fbc89b870084b', '2017-07-18 23:21:31', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-17', 1, '77de68daecd823babbb58edb1c8e14d7106e83bb', '7b52009b64fd0a2a49e6d8a939753077792b0554', '2017-07-18 23:21:57', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab-1-18', 2, 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'bd307a3ec329e10a2cff8fb87480823da114f8f4', '2017-07-18 23:51:44', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_orders`
--

CREATE TABLE `tbl_orders` (
  `id` varchar(50) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `order_date` varchar(20) NOT NULL,
  `date_delivered` varchar(20) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_orders`
--

INSERT INTO `tbl_orders` (`id`, `employee_id`, `order_date`, `date_delivered`, `status`) VALUES
('1b6453892473a467d07372d45eb05abc2031647a', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 22:40:36', '', 1),
('77de68daecd823babbb58edb1c8e14d7106e83bb', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 22:33:07', '', 1),
('da4b9237bacccdf19c0760cab7aec4a8359010b0', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 12:24:46', '', 1),
('356a192b7913b04c54574d18c28d46e6395428ab', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 11:56:47', '', 1),
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 11:54:42', '', 1),
('ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:05:41', '', 1),
('c1dfd96eea8cc2b62785275bca38ac261256e278', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:10:15', '', 1),
('902ba3cda1883801594b6e1b452790cc53948fda', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:11:26', '', 1),
('fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:11:57', '', 1),
('0ade7c2cf97f75d009975f4d720d1fa6c19f4897', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:12:12', '', 1),
('b1d5781111d84f7b3fe45a0852e59758cd7a87e5', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:19:17', '', 1),
('17ba0791499db908433b80f37c5fbc89b870084b', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:21:31', '', 1),
('7b52009b64fd0a2a49e6d8a939753077792b0554', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:21:57', '', 1),
('bd307a3ec329e10a2cff8fb87480823da114f8f4', '356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-07-18 23:51:44', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pointbalance`
--

CREATE TABLE `tbl_pointbalance` (
  `id` varchar(60) NOT NULL,
  `balance` varchar(10) NOT NULL,
  `reset` varchar(10) NOT NULL,
  `status` varchar(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_pointbalance`
--

INSERT INTO `tbl_pointbalance` (`id`, `balance`, `reset`, `status`) VALUES
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', '50', '100', '1'),
('356a192b7913b04c54574d18c28d46e6395428ab', '36', '100', '1');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_points`
--

CREATE TABLE `tbl_points` (
  `id` varchar(50) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `points` int(11) NOT NULL,
  `company_id` varchar(60) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_points`
--

INSERT INTO `tbl_points` (`id`, `employee_id`, `points`, `company_id`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab-0', '2017-1091', 204, '356a192b7913b04c54574d18c28d46e6395428ab'),
('356a192b7913b04c54574d18c28d46e6395428ab-1', '2017-1001', 100, '356a192b7913b04c54574d18c28d46e6395428ab');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pointsactivity`
--

CREATE TABLE `tbl_pointsactivity` (
  `id` varchar(50) NOT NULL,
  `points` int(11) NOT NULL,
  `addedby` varchar(20) NOT NULL,
  `date` varchar(20) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `remarks` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_pointsactivity`
--

INSERT INTO `tbl_pointsactivity` (`id`, `points`, `addedby`, `date`, `employee_id`, `remarks`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab-1', 100, 'admin', '2017-07-07 19:58:56', '2017-1001', 'This is for testing purposes'),
('356a192b7913b04c54574d18c28d46e6395428ab-2', 20, 'admin', '2017-07-14 16:32:08', '2017-1091', ''),
('356a192b7913b04c54574d18c28d46e6395428ab-3', 20, 'admin', '2017-07-14 16:32:50', '2017-1091', 'No remarks'),
('356a192b7913b04c54574d18c28d46e6395428ab-4', 20, 'admin', '2017-07-14 16:33:26', '2017-1091', 'No remarks'),
('356a192b7913b04c54574d18c28d46e6395428ab-5', 100, 'admin', '2017-07-14 16:33:55', '2017-1091', 'No remarks'),
('356a192b7913b04c54574d18c28d46e6395428ab-6', 20, 'admin', '2017-07-14 16:34:05', '2017-1091', 'No remarks'),
('356a192b7913b04c54574d18c28d46e6395428ab-7', 10, 'admin', '2017-07-14 16:42:20', '2017-1091', 'No remarks'),
('356a192b7913b04c54574d18c28d46e6395428ab-8', 2, 'admin', '2017-07-14 16:42:24', '2017-1091', 'No remarks'),
('356a192b7913b04c54574d18c28d46e6395428ab-9', 12, 'admin', '2017-07-14 16:42:29', '2017-1091', 'No remarks');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `id` varchar(50) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `category` text NOT NULL,
  `description` text NOT NULL,
  `status` varchar(10) NOT NULL,
  `date` varchar(20) NOT NULL,
  `addedby` varchar(50) NOT NULL,
  `lastupdateby` varchar(50) NOT NULL,
  `picture` varchar(60) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`id`, `product_name`, `qty`, `price`, `category`, `description`, `status`, `date`, `addedby`, `lastupdateby`, `picture`) VALUES
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', 'Product #1', 0, 12, '["we","us"]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-05-23 05:58:21', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default1.jpg'),
('356a192b7913b04c54574d18c28d46e6395428ab', 'Product #2', 12, 300, 'nothing', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-05-23 06:02:42', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', '356a192b7913b04c54574d18c28d46e6395428ab_1502285179.rnr'),
('da4b9237bacccdf19c0760cab7aec4a8359010b0', 'product #4', 12, 500, 'none', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-05-23 06:39:17', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0_1502285163.rnr'),
('77de68daecd823babbb58edb1c8e14d7106e83bb', 'Product #3', 360, 20, 'none', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-05-23 06:40:50', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', '77de68daecd823babbb58edb1c8e14d7106e83bb_1502285146.rnr'),
('1b6453892473a467d07372d45eb05abc2031647a', 'Product #5', 40, 1000, 'none', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-05-23 07:00:14', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', '1b6453892473a467d07372d45eb05abc2031647a_1502285124.rnr'),
('ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'Product #6', 460, 20, 'none', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-05-23 07:03:10', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4_1502285112.rnr'),
('c1dfd96eea8cc2b62785275bca38ac261256e278', 'Product #9', 12, 100, '["one","two","three","four"]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-06-06 19:29:57', '', '', 'c1dfd96eea8cc2b62785275bca38ac261256e278_1502285100.rnr'),
('902ba3cda1883801594b6e1b452790cc53948fda', 'Product #101', 12, 100, '["nothing","noen"]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-06-06 19:30:51', '', '', '902ba3cda1883801594b6e1b452790cc53948fda_1502285038.rnr'),
('fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Product #7', 95, 9, '["one","twi","three","four","five","six","seven"]', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Published', '2017-06-06 19:32:09', '', '', 'fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f_1499818674.rnr'),
('0ade7c2cf97f75d009975f4d720d1fa6c19f4897', 'Product #8', 96, 9, 'none', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Published', '2017-06-06 19:32:32', '', '', 'default10.jpg'),
('b1d5781111d84f7b3fe45a0852e59758cd7a87e5', 'Product #11', 0, 1, 'm', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', '1', '2017-06-06 19:43:22', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default11.jpg'),
('7b52009b64fd0a2a49e6d8a939753077792b0554', 'Product 12', 301, 7, '["Gadget"]', '<p><strong>Lorem ipsum dolor sit amet</strong>,</p><p><em>consectetur adipiscing elit,</em></p><p><u>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</u>.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip&nbsp;</p><ol><li>ex&nbsp;</li><li>ea&nbsp;</li><li>commodo&nbsp;</li><li>consequat.</li></ol><p><br></p><div><span style="font-family: Impact, Charcoal, sans-serif; font-size: 72px;"><span style="color: rgb(235, 107, 86);">R</span>N<span style="color: rgb(84, 172, 210);">R</span></span></div>', 'Pending', '2017-06-11 06:43:38', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default1.jpg'),
('17ba0791499db908433b80f37c5fbc89b870084b', 'Product sample', 100, 89, 'Gadget', '', '0', '2017-06-27 08:02:17', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default.jpg'),
('bd307a3ec329e10a2cff8fb87480823da114f8f4', 'Product Sample 1', 100, 83, 'Gadget', '', '0', '2017-06-27 08:03:51', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default.jpg'),
('fa35e192121eabf3dabf9f5ea6abdbcbc107ac3b', 'Product Sample 3', 300, 29, 'Gadget', '', '0', '2017-06-27 08:05:38', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default.jpg'),
('f1abd670358e036c31296e66b3b66c382ac00812', 'Product Sample 4', 20, 200, 'Gadget', '', '0', '2017-06-27 08:07:07', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default.jpg'),
('1574bddb75c78a6fd2251d61e2993b5146201319', 'Condom', 103, 11, '["Contraceptives","For Men","With Flavor"]', '<p><strong>Hello</strong> <span style="font-family: Verdana, Geneva, sans-serif; font-size: 24px; color: rgb(184, 49, 47);">World</span></p>', 'Published', '2017-06-28 15:34:43', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'da4b9237bacccdf19c0760cab7aec4a8359010b0', 'default.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_productcategories`
--

CREATE TABLE `tbl_productcategories` (
  `id` varchar(50) NOT NULL,
  `category` varchar(100) NOT NULL,
  `icon` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_request`
--

CREATE TABLE `tbl_request` (
  `id` varchar(60) NOT NULL,
  `header` varchar(100) NOT NULL,
  `request_by` varchar(60) NOT NULL COMMENT 'id of the person requested',
  `request_to` varchar(60) NOT NULL COMMENT 'id of the person to change info',
  `value` text NOT NULL COMMENT 'remarks',
  `remarks` text NOT NULL,
  `status` varchar(1) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_request`
--

INSERT INTO `tbl_request` (`id`, `header`, `request_by`, `request_to`, `value`, `remarks`, `status`, `date`) VALUES
('b6589fc6ab0dc82cf12099d1c2d40ab994e8410c', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', '["Gabrillo","Rufo","Narcisi"]', 'Name', '1', '2017-07-11 13:19:03'),
('356a192b7913b04c54574d18c28d46e6395428ab', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', 'Employee 1', 'Nickname', '1', '2017-07-11 13:25:37'),
('da4b9237bacccdf19c0760cab7aec4a8359010b0', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', 'Rufo', 'Nickname', '2', '2017-07-11 13:25:00'),
('77de68daecd823babbb58edb1c8e14d7106e83bb', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', 'kristy.aroa@rewards.com.ph', 'Email', '1', '2017-07-11 13:36:00'),
('1b6453892473a467d07372d45eb05abc2031647a', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', '09484993950', 'Contact Number', '1', '2017-07-11 13:31:12'),
('ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', 'Macabito Calasiao Pangasinan 1', 'Address', '1', '2017-07-11 13:36:25'),
('c1dfd96eea8cc2b62785275bca38ac261256e278', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', 'Female', 'Gender', '1', '2017-07-11 13:36:34'),
('902ba3cda1883801594b6e1b452790cc53948fda', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', '11/11/1992', 'Date of Birth', '1', '2017-07-11 13:36:49'),
('fe5dbbcea5ce7e2988b8c69bcfdfde8904aabc1f', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', '356a192b7913b04c54574d18c28d46e6395428ab-1_1499753690.rnr', 'Profile Picture', '1', '2017-07-11 14:14:50'),
('0ade7c2cf97f75d009975f4d720d1fa6c19f4897', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', '356a192b7913b04c54574d18c28d46e6395428ab-1_1499753739.rnr', 'Profile Picture', '1', '2017-07-11 14:15:39'),
('b1d5781111d84f7b3fe45a0852e59758cd7a87e5', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-1', 'Admin', '356a192b7913b04c54574d18c28d46e6395428ab-1_1499763260.rnr', 'Profile Picture', '1', '2017-07-11 16:54:20'),
('17ba0791499db908433b80f37c5fbc89b870084b', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Admin', '["Gabrillo","Rufo 2","Narcisi"]', 'Name', '1', '2017-07-13 09:52:01'),
('7b52009b64fd0a2a49e6d8a939753077792b0554', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Admin', 'JR', 'Nickname', '1', '2017-07-13 09:52:08'),
('bd307a3ec329e10a2cff8fb87480823da114f8f4', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Admin', 'President', 'Position', '1', '2017-07-13 09:52:16'),
('fa35e192121eabf3dabf9f5ea6abdbcbc107ac3b', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Admin', '09484993951', 'Contact Number', '1', '2017-07-13 09:52:21'),
('f1abd670358e036c31296e66b3b66c382ac00812', 'Update Employee Account', '356a192b7913b04c54574d18c28d46e6395428ab-0', 'Admin', '01/26/1993', 'Date of Birth', '1', '2017-07-13 09:52:40'),
('1574bddb75c78a6fd2251d61e2993b5146201319', 'Add Points', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab-0', '100', 'nice', '1', '2017-07-14 12:37:53'),
('0716d9708d321ffb6a00818614779e779925365c', 'Add Points', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab-0', '20', 'asas', '1', '2017-07-14 14:25:06'),
('9e6a55b6b4563e652a23be9d623ca5055c356940', 'Add Points', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab-1', '30', 'ncie', '2', '2017-07-14 14:25:27'),
('b3f0c7f6bb763af1be91d9e74eabfeb199dc1f1f', 'Add Points', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab-0', '20', 'wqw', '1', '2017-07-14 15:17:49'),
('91032ad7bbcb6cf72875e8e8207dcfba80173f7c', 'Add Points', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab-0', '10', 'wew', '1', '2017-07-14 15:18:50'),
('472b07b9fcf2c2451e8781e944bf5f77cd8457c8', 'Add Points', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab-0', '2', '23', '1', '2017-07-14 15:20:04'),
('12c6fc06c99a462375eeb3f43dfd832b08ca9e17', 'Add Points', '356a192b7913b04c54574d18c28d46e6395428ab-0', '356a192b7913b04c54574d18c28d46e6395428ab-0', '12', '1212', '1', '2017-07-14 15:20:32');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_wishlist`
--

CREATE TABLE `tbl_wishlist` (
  `id` varchar(50) NOT NULL,
  `product_id` varchar(50) NOT NULL,
  `employee_id` varchar(50) NOT NULL,
  `date` varchar(20) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_accountconfirmation`
--
ALTER TABLE `tbl_accountconfirmation`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_employer`
--
ALTER TABLE `tbl_employer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_logs`
--
ALTER TABLE `tbl_logs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_orderdetails`
--
ALTER TABLE `tbl_orderdetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_orders`
--
ALTER TABLE `tbl_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_pointbalance`
--
ALTER TABLE `tbl_pointbalance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_points`
--
ALTER TABLE `tbl_points`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_pointsactivity`
--
ALTER TABLE `tbl_pointsactivity`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_productcategories`
--
ALTER TABLE `tbl_productcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_request`
--
ALTER TABLE `tbl_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_wishlist`
--
ALTER TABLE `tbl_wishlist`
  ADD PRIMARY KEY (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
