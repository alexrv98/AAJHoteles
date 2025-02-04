-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-02-2025 a las 03:08:17
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `turisthotel`
--
CREATE DATABASE IF NOT EXISTS `turisthotel` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_sin_cuenta`
--

CREATE TABLE `clientes_sin_cuenta` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `telefono` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes_sin_cuenta`
--

INSERT INTO `clientes_sin_cuenta` (`id`, `nombre`, `correo`, `telefono`) VALUES
(1, 'Alex', 'libravarillas777@gmail.com', '2481809911'),
(2, 'Alexis', 'ivan@uth.edu.mx', '2481809911');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitaciones`
--

CREATE TABLE `habitaciones` (
  `id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `tipo_habitacion_id` int(11) NOT NULL,
  `numero_habitacion` varchar(10) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `disponibilidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `habitaciones`
--

INSERT INTO `habitaciones` (`id`, `hotel_id`, `tipo_habitacion_id`, `numero_habitacion`, `precio`, `disponibilidad`) VALUES
(1, 1, 1, '101', 500.00, 1),
(2, 1, 1, '102', 130.00, 3),
(3, 1, 2, '201', 180.00, 10),
(4, 1, 2, '202', 190.00, 8),
(5, 1, 3, '301', 250.00, 6),
(6, 1, 3, '302', 260.00, 4),
(7, 1, 4, '401', 300.00, 6),
(8, 1, 4, '402', 310.00, 5),
(9, 1, 4, '403', 320.00, 7),
(10, 1, 5, '501', 500.00, 2),
(11, 1, 5, '502', 520.00, 1),
(12, 1, 2, '203', 190.00, 7),
(13, 1, 1, '103', 120.00, 4),
(14, 1, 3, '303', 260.00, 5),
(15, 1, 3, '304', 250.00, 6),
(16, 1, 4, '404', 310.00, 3),
(17, 1, 5, '503', 510.00, 1),
(18, 1, 4, '405', 320.00, 2),
(19, 1, 2, '204', 180.00, 8),
(20, 1, 1, '104', 130.00, 4),
(21, 2, 1, '101', 120.00, 5),
(22, 2, 1, '102', 130.00, 3),
(23, 2, 2, '201', 180.00, 10),
(24, 2, 2, '202', 190.00, 8),
(25, 2, 3, '301', 250.00, 6),
(26, 2, 3, '302', 260.00, 4),
(27, 2, 4, '401', 300.00, 6),
(28, 2, 4, '402', 310.00, 5),
(29, 2, 4, '403', 320.00, 7),
(30, 2, 5, '501', 500.00, 2),
(31, 2, 5, '502', 520.00, 1),
(32, 2, 2, '203', 190.00, 7),
(33, 2, 1, '103', 120.00, 4),
(34, 2, 3, '303', 260.00, 5),
(35, 2, 3, '304', 250.00, 6),
(36, 2, 4, '404', 310.00, 3),
(37, 2, 5, '503', 510.00, 1),
(38, 2, 4, '405', 320.00, 2),
(39, 2, 2, '204', 180.00, 8),
(40, 2, 1, '104', 130.00, 4),
(41, 3, 1, '101', 125.00, 6),
(42, 3, 1, '102', 135.00, 4),
(43, 3, 2, '201', 185.00, 10),
(44, 3, 2, '202', 195.00, 8),
(45, 3, 3, '301', 255.00, 7),
(46, 3, 3, '302', 265.00, 5),
(47, 3, 4, '401', 305.00, 8),
(48, 3, 4, '402', 315.00, 6),
(49, 3, 4, '403', 325.00, 4),
(50, 3, 5, '501', 510.00, 2),
(51, 3, 5, '502', 530.00, 1),
(52, 3, 2, '203', 195.00, 7),
(53, 3, 1, '103', 125.00, 5),
(54, 3, 3, '303', 265.00, 6),
(55, 3, 3, '304', 255.00, 8),
(56, 3, 4, '404', 315.00, 3),
(57, 3, 5, '503', 520.00, 1),
(58, 3, 4, '405', 325.00, 4),
(59, 3, 2, '204', 185.00, 9),
(60, 3, 1, '104', 135.00, 6),
(61, 4, 1, '101', 125.00, 5),
(62, 4, 1, '102', 135.00, 4),
(63, 4, 2, '201', 180.00, 9),
(64, 4, 2, '202', 190.00, 6),
(65, 4, 3, '301', 250.00, 7),
(66, 4, 3, '302', 260.00, 5),
(67, 4, 4, '401', 300.00, 8),
(68, 4, 4, '402', 310.00, 6),
(69, 4, 4, '403', 320.00, 5),
(70, 4, 5, '501', 500.00, 3),
(71, 4, 5, '502', 520.00, 2),
(72, 4, 2, '203', 190.00, 7),
(73, 4, 1, '103', 125.00, 5),
(74, 4, 3, '303', 260.00, 6),
(75, 4, 3, '304', 250.00, 8),
(76, 4, 4, '404', 310.00, 4),
(77, 4, 5, '503', 510.00, 2),
(78, 4, 4, '405', 320.00, 3),
(79, 4, 2, '204', 180.00, 8),
(80, 4, 1, '104', 135.00, 4),
(81, 5, 1, '101', 125.00, 6),
(82, 5, 1, '102', 135.00, 4),
(83, 5, 2, '201', 185.00, 8),
(84, 5, 2, '202', 195.00, 7),
(85, 5, 3, '301', 255.00, 6),
(86, 5, 3, '302', 265.00, 5),
(87, 5, 4, '401', 305.00, 7),
(88, 5, 4, '402', 315.00, 6),
(89, 5, 4, '403', 325.00, 5),
(90, 5, 5, '501', 510.00, 2),
(91, 5, 5, '502', 530.00, 1),
(92, 5, 2, '203', 195.00, 7),
(93, 5, 1, '103', 125.00, 5),
(94, 5, 3, '303', 265.00, 6),
(95, 5, 3, '304', 255.00, 8),
(96, 5, 4, '404', 315.00, 4),
(97, 5, 5, '503', 520.00, 1),
(98, 5, 4, '405', 325.00, 5),
(99, 5, 2, '204', 185.00, 9),
(100, 5, 1, '104', 135.00, 6),
(101, 6, 1, '101', 130.00, 6),
(102, 6, 1, '102', 140.00, 4),
(103, 6, 2, '201', 200.00, 8),
(104, 6, 2, '202', 210.00, 6),
(105, 6, 3, '301', 280.00, 5),
(106, 6, 3, '302', 290.00, 4),
(107, 6, 4, '401', 330.00, 7),
(108, 6, 4, '402', 340.00, 6),
(109, 6, 4, '403', 350.00, 5),
(110, 6, 5, '501', 530.00, 2),
(111, 6, 5, '502', 550.00, 1),
(112, 6, 2, '203', 210.00, 7),
(113, 6, 1, '103', 130.00, 5),
(114, 6, 3, '303', 290.00, 6),
(115, 6, 3, '304', 280.00, 8),
(116, 6, 4, '404', 340.00, 4),
(117, 6, 5, '503', 540.00, 1),
(118, 6, 4, '405', 350.00, 3),
(119, 6, 2, '204', 200.00, 9),
(120, 6, 1, '104', 140.00, 4),
(121, 7, 1, '101', 125.00, 7),
(122, 7, 1, '102', 135.00, 5),
(123, 7, 2, '201', 185.00, 9),
(124, 7, 2, '202', 195.00, 6),
(125, 7, 3, '301', 255.00, 7),
(126, 7, 3, '302', 265.00, 5),
(127, 7, 4, '401', 305.00, 8),
(128, 7, 4, '402', 315.00, 6),
(129, 7, 4, '403', 325.00, 4),
(130, 7, 5, '501', 510.00, 2),
(131, 7, 5, '502', 530.00, 1),
(132, 7, 2, '203', 195.00, 7),
(133, 7, 1, '103', 125.00, 6),
(134, 7, 3, '303', 265.00, 6),
(135, 7, 3, '304', 255.00, 8),
(136, 7, 4, '404', 315.00, 3),
(137, 7, 5, '503', 520.00, 1),
(138, 7, 4, '405', 325.00, 2),
(139, 7, 2, '204', 185.00, 9),
(140, 7, 1, '104', 135.00, 5),
(141, 8, 1, '101', 120.00, 8),
(142, 8, 1, '102', 130.00, 6),
(143, 8, 2, '201', 180.00, 9),
(144, 8, 2, '202', 190.00, 6),
(145, 8, 3, '301', 250.00, 7),
(146, 8, 3, '302', 260.00, 5),
(147, 8, 4, '401', 300.00, 8),
(148, 8, 4, '402', 310.00, 6),
(149, 8, 4, '403', 320.00, 5),
(150, 8, 5, '501', 510.00, 2),
(151, 8, 5, '502', 530.00, 1),
(152, 8, 2, '203', 190.00, 7),
(153, 8, 1, '103', 120.00, 5),
(154, 8, 3, '303', 260.00, 6),
(155, 8, 3, '304', 250.00, 8),
(156, 8, 4, '404', 310.00, 4),
(157, 8, 5, '503', 520.00, 1),
(158, 8, 4, '405', 320.00, 3),
(159, 8, 2, '204', 180.00, 9),
(160, 8, 1, '104', 130.00, 4),
(161, 9, 1, '101', 125.00, 6),
(162, 9, 1, '102', 135.00, 4),
(163, 9, 2, '201', 185.00, 8),
(164, 9, 2, '202', 195.00, 7),
(165, 9, 3, '301', 255.00, 6),
(166, 9, 3, '302', 265.00, 5),
(167, 9, 4, '401', 305.00, 7),
(168, 9, 4, '402', 315.00, 6),
(169, 9, 4, '403', 325.00, 5),
(170, 9, 5, '501', 510.00, 2),
(171, 9, 5, '502', 530.00, 1),
(172, 9, 2, '203', 195.00, 7),
(173, 9, 1, '103', 125.00, 5),
(174, 9, 3, '303', 265.00, 6),
(175, 9, 3, '304', 255.00, 8),
(176, 9, 4, '404', 315.00, 3),
(177, 9, 5, '503', 520.00, 1),
(178, 9, 4, '405', 325.00, 2),
(179, 9, 2, '204', 185.00, 9),
(180, 9, 1, '104', 135.00, 5),
(181, 10, 1, '101', 130.00, 5),
(182, 10, 1, '102', 140.00, 3),
(183, 10, 2, '201', 200.00, 7),
(184, 10, 2, '202', 210.00, 6),
(185, 10, 3, '301', 280.00, 5),
(186, 10, 3, '302', 290.00, 4),
(187, 10, 4, '401', 330.00, 6),
(188, 10, 4, '402', 340.00, 5),
(189, 10, 4, '403', 350.00, 4),
(190, 10, 5, '501', 530.00, 2),
(191, 10, 5, '502', 550.00, 1),
(192, 10, 2, '203', 210.00, 6),
(193, 10, 1, '103', 130.00, 5),
(194, 10, 3, '303', 290.00, 6),
(195, 10, 3, '304', 280.00, 7),
(196, 10, 4, '404', 340.00, 3),
(197, 10, 5, '503', 540.00, 1),
(198, 10, 4, '405', 350.00, 2),
(199, 10, 2, '204', 200.00, 8),
(200, 10, 1, '104', 140.00, 4),
(201, 11, 1, '101', 130.00, 5),
(202, 11, 1, '102', 140.00, 4),
(203, 11, 2, '201', 190.00, 6),
(204, 11, 2, '202', 200.00, 5),
(205, 11, 3, '301', 270.00, 4),
(206, 11, 3, '302', 280.00, 5),
(207, 11, 4, '401', 320.00, 6),
(208, 11, 4, '402', 330.00, 5),
(209, 11, 4, '403', 340.00, 4),
(210, 11, 5, '501', 520.00, 3),
(211, 11, 5, '502', 540.00, 2),
(212, 11, 2, '203', 200.00, 5),
(213, 11, 1, '103', 130.00, 3),
(214, 11, 3, '303', 280.00, 6),
(215, 11, 3, '304', 270.00, 7),
(216, 12, 1, '101', 125.00, 5),
(217, 12, 1, '102', 135.00, 3),
(218, 12, 2, '201', 185.00, 7),
(219, 12, 2, '202', 195.00, 6),
(220, 12, 3, '301', 260.00, 5),
(221, 12, 3, '302', 270.00, 6),
(222, 12, 4, '401', 310.00, 5),
(223, 12, 4, '402', 320.00, 4),
(224, 12, 4, '403', 330.00, 3),
(225, 12, 5, '501', 510.00, 2),
(226, 12, 5, '502', 530.00, 1),
(227, 12, 2, '203', 195.00, 5),
(228, 12, 1, '103', 125.00, 4),
(229, 12, 3, '303', 270.00, 6),
(230, 12, 3, '304', 260.00, 5),
(231, 13, 1, '101', 120.00, 6),
(232, 13, 1, '102', 130.00, 4),
(233, 13, 2, '201', 180.00, 6),
(234, 13, 2, '202', 190.00, 5),
(235, 13, 3, '301', 250.00, 4),
(236, 13, 3, '302', 260.00, 5),
(237, 13, 4, '401', 300.00, 7),
(238, 13, 4, '402', 310.00, 5),
(239, 13, 4, '403', 320.00, 6),
(240, 13, 5, '501', 510.00, 2),
(241, 13, 5, '502', 530.00, 1),
(242, 13, 2, '203', 190.00, 5),
(243, 13, 1, '103', 120.00, 4),
(244, 13, 3, '303', 260.00, 6),
(245, 13, 3, '304', 250.00, 7),
(246, 14, 1, '101', 125.00, 7),
(247, 14, 1, '102', 135.00, 5),
(248, 14, 2, '201', 185.00, 6),
(249, 14, 2, '202', 195.00, 5),
(250, 14, 3, '301', 260.00, 6),
(251, 14, 3, '302', 270.00, 4),
(252, 14, 4, '401', 310.00, 7),
(253, 14, 4, '402', 320.00, 5),
(254, 14, 4, '403', 330.00, 6),
(255, 14, 5, '501', 510.00, 3),
(256, 14, 5, '502', 530.00, 2),
(257, 14, 2, '203', 195.00, 5),
(258, 14, 1, '103', 125.00, 4),
(259, 14, 3, '303', 270.00, 6),
(260, 14, 3, '304', 260.00, 7),
(261, 15, 1, '101', 120.00, 5),
(262, 15, 1, '102', 130.00, 4),
(263, 15, 2, '201', 180.00, 6),
(264, 15, 2, '202', 190.00, 5),
(265, 15, 3, '301', 250.00, 4),
(266, 15, 3, '302', 260.00, 6),
(267, 15, 4, '401', 300.00, 5),
(268, 15, 4, '402', 310.00, 4),
(269, 15, 4, '403', 320.00, 6),
(270, 15, 5, '501', 510.00, 2),
(271, 15, 5, '502', 530.00, 1),
(272, 15, 2, '203', 190.00, 5),
(273, 15, 1, '103', 120.00, 4),
(274, 15, 3, '303', 260.00, 6),
(275, 15, 3, '304', 250.00, 7),
(276, 16, 1, '101', 125.00, 5),
(277, 16, 1, '102', 135.00, 4),
(278, 16, 2, '201', 185.00, 6),
(279, 16, 2, '202', 195.00, 5),
(280, 16, 3, '301', 260.00, 4),
(281, 16, 3, '302', 270.00, 5),
(282, 16, 4, '401', 310.00, 6),
(283, 16, 4, '402', 320.00, 5),
(284, 16, 4, '403', 330.00, 4),
(285, 16, 5, '501', 520.00, 3),
(286, 16, 5, '502', 540.00, 2),
(287, 16, 2, '203', 200.00, 5),
(288, 16, 1, '103', 130.00, 3),
(289, 16, 3, '303', 280.00, 6),
(290, 16, 3, '304', 270.00, 7),
(291, 17, 1, '101', 120.00, 6),
(292, 17, 1, '102', 130.00, 4),
(293, 17, 2, '201', 180.00, 6),
(294, 17, 2, '202', 190.00, 5),
(295, 17, 3, '301', 250.00, 4),
(296, 17, 3, '302', 260.00, 5),
(297, 17, 4, '401', 300.00, 7),
(298, 17, 4, '402', 310.00, 5),
(299, 17, 4, '403', 320.00, 6),
(300, 17, 5, '501', 510.00, 2),
(301, 17, 5, '502', 530.00, 1),
(302, 17, 2, '203', 190.00, 5),
(303, 17, 1, '103', 120.00, 4),
(304, 17, 3, '303', 260.00, 6),
(305, 17, 3, '304', 250.00, 7),
(306, 18, 1, '101', 125.00, 7),
(307, 18, 1, '102', 135.00, 5),
(308, 18, 2, '201', 185.00, 6),
(309, 18, 2, '202', 195.00, 5),
(310, 18, 3, '301', 260.00, 6),
(311, 18, 3, '302', 270.00, 4),
(312, 18, 4, '401', 310.00, 7),
(313, 18, 4, '402', 320.00, 5),
(314, 18, 4, '403', 330.00, 6),
(315, 18, 5, '501', 510.00, 3),
(316, 18, 5, '502', 530.00, 2),
(317, 18, 2, '203', 195.00, 5),
(318, 18, 1, '103', 125.00, 4),
(319, 18, 3, '303', 270.00, 6),
(320, 18, 3, '304', 260.00, 7),
(321, 19, 1, '101', 130.00, 5),
(322, 19, 1, '102', 140.00, 4),
(323, 19, 2, '201', 190.00, 6),
(324, 19, 2, '202', 200.00, 5),
(325, 19, 3, '301', 270.00, 4),
(326, 19, 3, '302', 280.00, 5),
(327, 19, 4, '401', 320.00, 6),
(328, 19, 4, '402', 330.00, 5),
(329, 19, 4, '403', 340.00, 4),
(330, 19, 5, '501', 520.00, 3),
(331, 19, 5, '502', 540.00, 2),
(332, 19, 2, '203', 200.00, 5),
(333, 19, 1, '103', 130.00, 3),
(334, 19, 3, '303', 280.00, 6),
(335, 19, 3, '304', 270.00, 7),
(336, 20, 1, '101', 125.00, 5),
(337, 20, 1, '102', 135.00, 4),
(338, 20, 2, '201', 185.00, 6),
(339, 20, 2, '202', 195.00, 5),
(340, 20, 3, '301', 260.00, 4),
(341, 20, 3, '302', 270.00, 5),
(342, 20, 4, '401', 310.00, 6),
(343, 20, 4, '402', 320.00, 5),
(344, 20, 4, '403', 330.00, 4),
(345, 20, 5, '501', 520.00, 3),
(346, 20, 5, '502', 540.00, 2),
(347, 20, 2, '203', 200.00, 5),
(348, 20, 1, '103', 130.00, 3),
(349, 20, 3, '303', 280.00, 6),
(350, 20, 3, '304', 270.00, 7),
(351, 21, 1, '101', 110.00, 5),
(352, 21, 1, '102', 120.00, 4),
(353, 21, 2, '201', 175.00, 6),
(354, 21, 2, '202', 185.00, 5),
(355, 21, 3, '301', 250.00, 4),
(356, 21, 3, '302', 260.00, 5),
(357, 21, 4, '401', 300.00, 6),
(358, 21, 4, '402', 310.00, 5),
(359, 21, 4, '403', 320.00, 4),
(360, 21, 5, '501', 500.00, 3),
(361, 21, 5, '502', 520.00, 2),
(362, 21, 2, '203', 190.00, 5),
(363, 21, 1, '103', 115.00, 3),
(364, 21, 3, '303', 265.00, 6),
(365, 21, 3, '304', 255.00, 7),
(366, 22, 1, '101', 115.00, 5),
(367, 22, 1, '102', 125.00, 4),
(368, 22, 2, '201', 180.00, 6),
(369, 22, 2, '202', 190.00, 5),
(370, 22, 3, '301', 255.00, 4),
(371, 22, 3, '302', 265.00, 5),
(372, 22, 4, '401', 305.00, 6),
(373, 22, 4, '402', 315.00, 5),
(374, 22, 4, '403', 325.00, 4),
(375, 22, 5, '501', 505.00, 3),
(376, 22, 5, '502', 525.00, 2),
(377, 22, 2, '203', 195.00, 5),
(378, 22, 1, '103', 120.00, 3),
(379, 22, 3, '303', 270.00, 6),
(380, 22, 3, '304', 260.00, 7),
(381, 23, 1, '101', 118.00, 5),
(382, 23, 1, '102', 128.00, 4),
(383, 23, 2, '201', 183.00, 6),
(384, 23, 2, '202', 193.00, 5),
(385, 23, 3, '301', 258.00, 4),
(386, 23, 3, '302', 268.00, 5),
(387, 23, 4, '401', 308.00, 6),
(388, 23, 4, '402', 318.00, 5),
(389, 23, 4, '403', 328.00, 4),
(390, 23, 5, '501', 508.00, 3),
(391, 23, 5, '502', 528.00, 2),
(392, 23, 2, '203', 198.00, 5),
(393, 23, 1, '103', 123.00, 3),
(394, 23, 3, '303', 273.00, 6),
(395, 23, 3, '304', 263.00, 7),
(396, 24, 1, '101', 122.00, 5),
(397, 24, 1, '102', 132.00, 4),
(398, 24, 2, '201', 187.00, 6),
(399, 24, 2, '202', 197.00, 5),
(400, 24, 3, '301', 262.00, 4),
(401, 24, 3, '302', 272.00, 5),
(402, 24, 4, '401', 312.00, 6),
(403, 24, 4, '402', 322.00, 5),
(404, 24, 4, '403', 332.00, 4),
(405, 24, 5, '501', 512.00, 3),
(406, 24, 5, '502', 532.00, 2),
(407, 24, 2, '203', 202.00, 5),
(408, 24, 1, '103', 127.00, 3),
(409, 24, 3, '303', 277.00, 6),
(410, 24, 3, '304', 267.00, 7),
(411, 25, 1, '101', 126.00, 5),
(412, 25, 1, '102', 136.00, 4),
(413, 25, 2, '201', 191.00, 6),
(414, 25, 2, '202', 201.00, 5),
(415, 25, 3, '301', 266.00, 4),
(416, 25, 3, '302', 276.00, 5),
(417, 25, 4, '401', 316.00, 6),
(418, 25, 4, '402', 326.00, 5),
(419, 25, 4, '403', 336.00, 4),
(420, 25, 5, '501', 516.00, 3),
(421, 25, 5, '502', 536.00, 2),
(422, 25, 2, '203', 206.00, 5),
(423, 25, 1, '103', 131.00, 3),
(424, 25, 3, '303', 281.00, 6),
(425, 25, 3, '304', 271.00, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles`
--

CREATE TABLE `hoteles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `lugar_id` int(11) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `estrellas` int(11) DEFAULT NULL,
  `imagenes` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `hoteles`
--

INSERT INTO `hoteles` (`id`, `nombre`, `descripcion`, `lugar_id`, `direccion`, `telefono`, `estrellas`, `imagenes`) VALUES
(1, 'Hotel Playa Azul', 'Un resort de lujo en la costa con vistas impresionantes al mar Caribe. Ideal para relajarse o practicar deportes acuáticos.', 1, 'Av. Costera 100, Cancún', '9981234567', 5, 'https://www.mycancuntours.com.mx/images/imgeditor/hoteles-en-cancun.jpg'),
(2, 'Hotel Isla Dorada', 'Ubicado en el corazón de Cancún, cerca de la zona hotelera, con acceso fácil a tiendas y restaurantes. Perfecto para turistas de todas las edades.', 1, 'Av. Tulum 15, Cancún', '9987654321', 4, 'https://hoteleshi.com/wp-content/uploads/2024/07/hoteles-descubre-descubre.jpg'),
(3, 'Hotel El Paraíso', 'Un hotel elegante con una gran piscina al aire libre y un spa de primer nivel. Las habitaciones ofrecen una vista espectacular al mar.', 1, 'Playa Marlin 45, Cancún', '9981122334', 5, 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/b0/c1/4c/boutique-hotels.jpg?w=1200&h=-1&s=1'),
(4, 'Hotel Bella Vista', 'Este encantador hotel boutique ofrece una experiencia única con un ambiente relajante y un servicio excepcional. Ideal para escapadas románticas.', 1, 'Blvd. Kukulcán 30, Cancún', '9985567890', 4, 'https://cdn0.uncomo.com/es/posts/2/5/3/como_funcionan_los_hoteles_por_horas_17352_orig.jpg'),
(5, 'Hotel Oasis Cancún', 'Con más de 500 habitaciones y múltiples opciones de restaurantes, este es el hotel ideal para familias y grupos grandes. ¡Diversión para todos!', 1, 'Zona Hotelera, Cancún', '9982233445', 3, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-club-vista2-esp.jpg?fit=1075%2C694&ssl=1'),
(6, 'Hotel Marqués de la Villa', 'Un histórico hotel de lujo con un restaurante gourmet y servicio a la habitación 24/7. Perfecto para aquellos que buscan una experiencia clásica de cinco estrellas.', 2, 'Calle Hidalgo 15, Mérida', '9999988776', 5, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-habitacion-handicap-esp.jpg?fit=1075%2C694&ssl=1'),
(7, 'Hotel La Quinta', 'Ubicado cerca del centro histórico de Mérida, este hotel es conocido por su hospitalidad y su ambiente colonial con modernas instalaciones.', 2, 'Calle 60 13, Mérida', '9992233445', 4, 'https://www.mycancuntours.com.mx/images/imgeditor/hoteles-en-cancun.jpg'),
(8, 'Hotel San Ángel', 'Disfruta de una vista espectacular de la ciudad y la tranquilidad de sus jardines. Ofrece servicios de spa y una variedad de actividades recreativas.', 2, 'Calle 64 22, Mérida', '9993344556', 3, 'https://hoteleshi.com/wp-content/uploads/2024/07/hoteles-descubre-descubre.jpg'),
(9, 'Hotel Casco Antiguo', 'Este hotel boutique se encuentra en una construcción colonial renovada. Tiene un ambiente relajado, ideal para quienes buscan disfrutar de la ciudad a pie.', 2, 'Calle 54 18, Mérida', '9994455667', 4, 'https://cdn0.uncomo.com/es/posts/2/5/3/como_funcionan_los_hoteles_por_horas_17352_orig.jpg'),
(10, 'Hotel Del Parque', 'Un hotel moderno con instalaciones de última tecnología. Su ubicación cerca de parques y plazas comerciales lo hace ideal para viajeros de negocios.', 2, 'Avenida 2000 50, Mérida', '9995566778', 3, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-club-vista2-esp.jpg?fit=1075%2C694&ssl=1'),
(11, 'Hotel Ciudad Real', 'Un acogedor hotel que ofrece un servicio cálido y personalizado, además de un restaurante con comida local deliciosa.', 3, 'Calle 12 10, Ciudad de México', '5551234567', 5, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-habitacion-handicap-esp.jpg?fit=1075%2C694&ssl=1'),
(12, 'Hotel Reforma Palace', 'Con una ubicación inmejorable sobre la Avenida Reforma, este hotel ofrece vistas panorámicas y una experiencia de lujo para quienes buscan lo mejor.', 3, 'Av. Paseo de la Reforma 50, CDMX', '5552345678', 5, 'https://www.mycancuntours.com.mx/images/imgeditor/hoteles-en-cancun.jpg'),
(13, 'Hotel Zócalo Central', 'Un hotel que resalta por su ubicación frente al Zócalo, proporcionando acceso directo a todos los puntos turísticos de la ciudad. Ideal para exploradores urbanos.', 3, 'Calle 5 de Febrero 20, CDMX', '5553456789', 4, 'https://hoteleshi.com/wp-content/uploads/2024/07/hoteles-descubre-descubre.jpg'),
(14, 'Hotel Plaza Mayor', 'Este moderno hotel ofrece habitaciones amplias, un gimnasio completo y un restaurante con vistas impresionantes a la ciudad.', 3, 'Av. 20 de Noviembre 10, CDMX', '5554567890', 4, 'https://hoteleshi.com/wp-content/uploads/2024/07/hoteles-descubre-descubre.jpg'),
(15, 'Hotel Alameda', 'Un hotel tradicional con más de 50 años de historia, famoso por su servicio personalizado y su cocina regional, ideal para viajeros exigentes.', 3, 'Calle Donceles 23, CDMX', '5555678901', 3, 'https://cdn0.uncomo.com/es/posts/2/5/3/como_funcionan_los_hoteles_por_horas_17352_orig.jpg'),
(16, 'Hotel Costa Real', 'Con un diseño moderno y ubicación privilegiada frente a la playa, este hotel ofrece actividades acuáticas y un ambiente relajante.', 4, 'Paseo Marítimo 12, Puerto Vallarta', '3221234567', 5, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-club-vista2-esp.jpg?fit=1075%2C694&ssl=1'),
(17, 'Hotel Mar de Plata', 'Un lugar tranquilo y sofisticado con acceso directo a la playa y opciones de entretenimiento para toda la familia.', 4, 'Playa Los Muertos 50, Puerto Vallarta', '3222345678', 4, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-habitacion-handicap-esp.jpg?fit=1075%2C694&ssl=1'),
(18, 'Hotel Villas del Mar', 'Ubicado en un área exclusiva, este hotel ofrece suites privadas con piscinas individuales y acceso a restaurantes de alta cocina.', 4, 'Bahía de Banderas 120, Puerto Vallarta', '3223456789', 5, 'https://www.mycancuntours.com.mx/images/imgeditor/hoteles-en-cancun.jpg'),
(19, 'Hotel El Tesoro', 'Un hotel pequeño y acogedor, con acceso privado a la playa y excelente gastronomía. Ideal para parejas.', 4, 'Calle del Sol 30, Puerto Vallarta', '3224567890', 3, 'https://hoteleshi.com/wp-content/uploads/2024/07/hoteles-descubre-descubre.jpg'),
(20, 'Hotel Playa Linda', 'Con una amplia gama de servicios todo incluido, este hotel es perfecto para quienes buscan unas vacaciones completas sin preocuparse por nada.', 4, 'Avenida del Mar 80, Puerto Vallarta', '3225678901', 4, 'https://cdn0.uncomo.com/es/posts/2/5/3/como_funcionan_los_hoteles_por_horas_17352_orig.jpg'),
(21, 'Hotel Montaña Real', 'En las alturas de la Sierra Madre, este hotel ofrece una experiencia única de montaña con cabañas y actividades al aire libre.', 5, 'Calle Real 25, Monterrey', '8181234567', 5, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-club-vista2-esp.jpg?fit=1075%2C694&ssl=1'),
(22, 'Hotel Valle Verde', 'Con una arquitectura rústica y hermosa, este hotel de montaña es ideal para quienes disfrutan del senderismo y la naturaleza.', 5, 'Calle Loma 40, Monterrey', '8182345678', 4, 'https://i0.wp.com/presidenteicmexico.com/wp-content/uploads/2024/04/hoteles-cdmx-polanco-habitacion-handicap-esp.jpg?fit=1075%2C694&ssl=1'),
(23, 'Hotel El Cielo', 'Este exclusivo hotel boutique en las montañas ofrece vistas panorámicas y actividades de aventura como escalada y rapel.', 5, 'Carretera 10, Monterrey', '8183456789', 5, 'https://www.mycancuntours.com.mx/images/imgeditor/hoteles-en-cancun.jpg'),
(24, 'Hotel Vista Sierra', 'Ubicado en un entorno natural y tranquilo, este hotel es perfecto para retiros de bienestar y relajación.', 5, 'Calle del Bosque 22, Monterrey', '8184567890', 4, 'https://hoteleshi.com/wp-content/uploads/2024/07/hoteles-descubre-descubre.jpg'),
(25, 'Hotel Refugio de la Sierra', 'Este tranquilo refugio en las montañas es ideal para quienes buscan desconectar y disfrutar de la paz y belleza natural.', 5, 'Calle Alta 60, Monterrey', '8185678901', 3, 'https://cdn0.uncomo.com/es/posts/2/5/3/como_funcionan_los_hoteles_por_horas_17352_orig.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares_turisticos`
--

CREATE TABLE `lugares_turisticos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `ubicacion` varchar(255) DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lugares_turisticos`
--

INSERT INTO `lugares_turisticos` (`id`, `nombre`, `descripcion`, `ubicacion`, `imagen`) VALUES
(1, 'Playa Paraíso', 'Una hermosa playa con arena blanca', 'Cancún, México', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Cancun_Strand_Luftbild_%2822143397586%29.jpg/1200px-Cancun_Strand_Luftbild_%2822143397586%29.jpg'),
(2, 'Cascada Esmeralda', 'Una cascada rodeada de naturaleza exuberante.', 'Costa Rica', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIGfvoV1scFKbKtCGRykgaaHowDFzAA4BEg&s'),
(3, 'Montaña Mística', 'Una montaña con senderos para excursionistas.', 'Perú', 'https://www.wamanadventures.com/blog/wp-content/uploads/2018/07/Misticismo-en-Machu-Picchu-Waman-Adventures-1.jpg'),
(4, 'Acapulco', 'Un sitio arqueológico con historia milenaria.', 'México', 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/228000/228069-Guerrero.jpg'),
(5, 'Las vegas', 'Una isla paradisíaca con playas espectaculares.', 'EUUA', 'https://www.visittheusa.mx/sites/default/files/styles/hero_l/public/images/hero_media_image/2023-07/d8b99faa-dca0-4523-aa39-b2d7ee2b91f7_1.jpeg?h=2203e8f6&itok=F1zwF0wk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pagos`
--

CREATE TABLE `pagos` (
  `id` int(11) NOT NULL,
  `reservacion_id` int(11) NOT NULL,
  `metodo_pago` enum('tarjeta','paypal','transferencia') NOT NULL,
  `estado` enum('pendiente','pagado','fallido') DEFAULT 'pendiente',
  `fecha_pago` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservaciones`
--

CREATE TABLE `reservaciones` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `habitacion_id` int(11) NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `estado` enum('pendiente','confirmada','cancelada') DEFAULT 'pendiente',
  `total_a_pagar` decimal(10,2) NOT NULL DEFAULT 0.00,
  `cliente_sin_cuenta_id` int(11) DEFAULT NULL
) ;

--
-- Volcado de datos para la tabla `reservaciones`
--

INSERT INTO `reservaciones` (`id`, `usuario_id`, `habitacion_id`, `fecha_inicio`, `fecha_fin`, `estado`, `total_a_pagar`, `cliente_sin_cuenta_id`) VALUES
(1, NULL, 5, '2025-02-03 00:00:00', '2025-02-07 00:00:00', 'pendiente', 1000.00, 1),
(2, NULL, 3, '2025-02-10 00:00:00', '2025-02-13 00:00:00', 'pendiente', 540.00, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reseñas`
--

CREATE TABLE `reseñas` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `calificacion` int(11) NOT NULL,
  `comentario` text DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reseñas`
--

INSERT INTO `reseñas` (`id`, `usuario_id`, `hotel_id`, `calificacion`, `comentario`, `fecha`) VALUES
(1, 2, 1, 5, 'Excelente hotel, la atención al cliente fue increíble y las habitaciones muy cómodas.', '2025-02-03 16:10:00'),
(2, 2, 1, 4, 'Buena experiencia, aunque el precio es algo alto, la calidad es muy buena.', '2025-02-03 16:15:00'),
(3, 3, 1, 5, 'Me encantó, un lugar tranquilo y perfecto para descansar. El servicio fue impecable.', '2025-02-03 16:20:00'),
(4, 3, 1, 3, 'Las instalaciones necesitan algunas mejoras, pero el trato fue excelente.', '2025-02-03 16:25:00'),
(5, 2, 2, 4, 'Buen hotel con una ubicación excelente, pero los precios son un poco altos.', '2025-02-03 16:30:00'),
(6, 2, 2, 5, 'Muy buena opción, excelente servicio y atención. La vista es espectacular.', '2025-02-03 16:35:00'),
(7, 3, 2, 3, 'La habitación no estaba tan limpia como esperaba, pero la atención fue muy buena.', '2025-02-03 16:40:00'),
(8, 3, 2, 4, 'Hotel cómodo, aunque podría mejorar la variedad de alimentos en el restaurante.', '2025-02-03 16:45:00'),
(9, 2, 3, 5, 'Me encantó la experiencia, la atención fue excelente y la ubicación es perfecta.', '2025-02-03 16:50:00'),
(10, 2, 3, 4, 'Buena opción, aunque el servicio podría ser un poco más rápido en la recepción.', '2025-02-03 16:55:00'),
(11, 3, 3, 5, 'Increíble lugar, tranquilo y relajante. Las instalaciones muy bien cuidadas.', '2025-02-03 17:00:00'),
(12, 3, 3, 3, 'Las instalaciones están bien, pero la limpieza no fue del todo adecuada.', '2025-02-03 17:05:00'),
(13, 2, 4, 4, 'Buen hotel, la ubicación es excelente, aunque los precios son un poco elevados.', '2025-02-03 17:10:00'),
(14, 2, 4, 5, 'La mejor experiencia de todas, el servicio es excelente y las instalaciones muy buenas.', '2025-02-03 17:15:00'),
(15, 3, 4, 3, 'El hotel está bien, pero se necesita mejorar la calidad de las habitaciones.', '2025-02-03 17:20:00'),
(16, 3, 4, 4, 'Buen hotel, la comida fue excelente pero el servicio de limpieza podría mejorar.', '2025-02-03 17:25:00'),
(17, 2, 5, 5, 'Excelente hotel, muy moderno y con una atención increíble. Totalmente recomendable.', '2025-02-03 17:30:00'),
(18, 2, 5, 4, 'Muy buen hotel, pero las habitaciones podrían ser más grandes para el precio.', '2025-02-03 17:35:00'),
(19, 3, 5, 5, 'Increíble vista y habitaciones bien cuidadas, la experiencia fue única.', '2025-02-03 17:40:00'),
(20, 3, 5, 4, 'El servicio fue excelente, pero las camas podrían ser más cómodas.', '2025-02-03 17:45:00'),
(21, 2, 6, 5, 'Todo excelente, desde la atención hasta las instalaciones. Recomendado.', '2025-02-03 17:50:00'),
(22, 2, 6, 4, 'Muy buen hotel, aunque el wifi no funciona bien en algunas habitaciones.', '2025-02-03 17:55:00'),
(23, 3, 6, 5, 'Muy buena experiencia, la ubicación es ideal para conocer la ciudad.', '2025-02-03 18:00:00'),
(24, 3, 6, 3, 'La habitación era pequeña, pero el servicio fue correcto.', '2025-02-03 18:05:00'),
(25, 2, 7, 5, 'Excelente hotel, muy cómodo y con todo lo que necesitas para una buena estadía.', '2025-02-03 18:10:00'),
(26, 2, 7, 4, 'Buen servicio, pero el aire acondicionado podría ser más eficiente.', '2025-02-03 18:15:00'),
(27, 3, 7, 5, 'Me encantó todo, el desayuno incluido estuvo delicioso y variado.', '2025-02-03 18:20:00'),
(28, 3, 7, 4, 'La habitación estaba limpia, pero el baño podría mejorar.', '2025-02-03 18:25:00'),
(29, 2, 8, 4, 'Buen hotel, pero el servicio de limpieza podría ser mejor.', '2025-02-03 18:30:00'),
(30, 2, 8, 5, 'Increíble, la ubicación y las instalaciones son perfectas. Sin duda lo recomendaría.', '2025-02-03 18:35:00'),
(31, 3, 8, 4, 'Muy buen servicio, pero el wifi no funcionó correctamente durante mi estadía.', '2025-02-03 18:40:00'),
(32, 3, 8, 3, 'Las instalaciones son buenas, pero el aire acondicionado estaba defectuoso.', '2025-02-03 18:45:00'),
(33, 2, 9, 5, 'La estadía fue excelente, muy cómodo y bien ubicado. El desayuno estuvo delicioso.', '2025-02-03 18:50:00'),
(34, 2, 9, 4, 'Buen hotel, aunque podría mejorar en la variedad de actividades recreativas.', '2025-02-03 18:55:00'),
(35, 3, 9, 5, 'Muy buen hotel, el personal fue súper atento y la habitación impecable.', '2025-02-03 19:00:00'),
(36, 3, 9, 4, 'Todo muy bien, solo la piscina estaba un poco fría.', '2025-02-03 19:05:00'),
(37, 2, 10, 5, 'Todo excelente, la atención fue perfecta y las instalaciones impecables.', '2025-02-03 19:10:00'),
(38, 2, 10, 4, 'Buen hotel, pero el servicio de recepción podría mejorar un poco.', '2025-02-03 19:15:00'),
(39, 3, 10, 5, 'Maravillosa experiencia, todo estuvo genial, el personal fue muy amable.', '2025-02-03 19:20:00'),
(40, 3, 10, 4, 'Las habitaciones son buenas, pero el precio es algo elevado.', '2025-02-03 19:25:00'),
(41, 2, 11, 5, 'Un hotel de primera clase. El servicio y la atención fueron inmejorables.', '2025-02-03 19:30:00'),
(42, 2, 11, 4, 'El hotel está muy bien, aunque las habitaciones podrían mejorar un poco en tamaño.', '2025-02-03 19:35:00'),
(43, 3, 11, 5, 'Excelente experiencia, la habitación era perfecta, la piscina espectacular.', '2025-02-03 19:40:00'),
(44, 3, 11, 4, 'Muy buen hotel, pero la comida podría mejorar en variedad.', '2025-02-03 19:45:00'),
(45, 2, 12, 4, 'El hotel es bueno, la ubicación es excelente pero el servicio podría mejorar.', '2025-02-03 19:50:00'),
(46, 2, 12, 5, 'Una excelente opción para hospedarse, la atención y limpieza fue perfecta.', '2025-02-03 19:55:00'),
(47, 3, 12, 3, 'Las instalaciones están bien, pero el ruido por la noche fue un poco molesto.', '2025-02-03 20:00:00'),
(48, 3, 12, 4, 'Buen hotel, la piscina es un plus. Podría mejorar la oferta gastronómica.', '2025-02-03 20:05:00'),
(49, 2, 13, 5, 'Un lugar increíble, todo estuvo perfecto, el personal muy atento y las instalaciones muy buenas.', '2025-02-03 20:10:00'),
(50, 2, 13, 4, 'Buena opción, aunque las habitaciones son un poco pequeñas para el precio.', '2025-02-03 20:15:00'),
(51, 3, 13, 5, 'Excelente experiencia, muy recomendado. Todo estuvo genial.', '2025-02-03 20:20:00'),
(52, 3, 13, 4, 'Muy buen servicio, la comida es excelente pero podrían ofrecer más actividades recreativas.', '2025-02-03 20:25:00'),
(53, 2, 14, 5, '¡Impresionante! Muy buen hotel, cómodo y con excelente servicio.', '2025-02-03 20:30:00'),
(54, 2, 14, 4, 'Muy buen servicio, pero la piscina podría estar un poco más limpia.', '2025-02-03 20:35:00'),
(55, 3, 14, 5, 'Todo estuvo perfecto, la ubicación es excelente y la atención de primera.', '2025-02-03 20:40:00'),
(56, 3, 14, 4, 'El hotel está muy bien, pero el aire acondicionado no enfrió adecuadamente.', '2025-02-03 20:45:00'),
(57, 2, 15, 4, 'El hotel está bien, pero las habitaciones podrían ser más grandes.', '2025-02-03 20:50:00'),
(58, 2, 15, 5, 'La mejor experiencia de todas. El servicio y las instalaciones perfectos.', '2025-02-03 20:55:00'),
(59, 3, 15, 5, 'Increíble, la atención al cliente fue de primera y las instalaciones impecables.', '2025-02-03 21:00:00'),
(60, 3, 15, 4, 'Muy buen servicio, aunque las almohadas eran un poco incómodas.', '2025-02-03 21:05:00'),
(61, 2, 16, 5, 'Todo excelente, muy limpio, moderno y el personal muy amable.', '2025-02-03 21:10:00'),
(62, 2, 16, 4, 'Muy buen hotel, pero la comida podría ser mejor y más variada.', '2025-02-03 21:15:00'),
(63, 3, 16, 5, 'Me encantó, todo estuvo genial. El servicio fue de 10.', '2025-02-03 21:20:00'),
(64, 3, 16, 4, 'Muy buen hotel, pero la ubicación no es tan buena como esperaba.', '2025-02-03 21:25:00'),
(65, 2, 17, 4, 'El hotel está bien, aunque las habitaciones no son tan grandes como parecen en las fotos.', '2025-02-03 21:30:00'),
(66, 2, 17, 5, 'Excelente servicio, ubicación y atención. Todo perfecto.', '2025-02-03 21:35:00'),
(67, 3, 17, 5, 'Increíble, lo mejor fue la vista y la tranquilidad del lugar.', '2025-02-03 21:40:00'),
(68, 3, 17, 4, 'Buen hotel, pero el precio es algo elevado para lo que ofrecen.', '2025-02-03 21:45:00'),
(69, 2, 18, 5, 'Excelente en todos los aspectos. Muy cómodo y el servicio fue maravilloso.', '2025-02-03 21:50:00'),
(70, 2, 18, 4, 'Muy buen hotel, la comida excelente, pero las habitaciones son algo pequeñas.', '2025-02-03 21:55:00'),
(71, 3, 18, 5, 'Maravilloso. El servicio fue excepcional y las instalaciones muy bien cuidadas.', '2025-02-03 22:00:00'),
(72, 3, 18, 4, 'Buen hotel, pero podrían mejorar la atención en el restaurante.', '2025-02-03 22:05:00'),
(73, 2, 19, 5, 'Muy cómodo y bien ubicado. El servicio fue excelente en todo momento.', '2025-02-03 22:10:00'),
(74, 2, 19, 4, 'Muy buen hotel, aunque la variedad de comida podría ser mejor.', '2025-02-03 22:15:00'),
(75, 3, 19, 5, 'Todo perfecto, la piscina y la atención fueron increíbles. Volveré sin duda.', '2025-02-03 22:20:00'),
(76, 3, 19, 4, 'El hotel está bien, pero la música en la piscina era demasiado alta.', '2025-02-03 22:25:00'),
(77, 2, 20, 5, 'Increíble, todo estuvo genial, el personal muy atento y la habitación perfecta.', '2025-02-03 22:30:00'),
(78, 2, 20, 4, 'Muy buen hotel, pero deberían mejorar la señal de wifi en las habitaciones.', '2025-02-03 22:35:00'),
(79, 3, 20, 5, 'Excelente, muy limpio y moderno. Las instalaciones estaban en perfectas condiciones.', '2025-02-03 22:40:00'),
(80, 3, 20, 4, 'Muy bien en general, pero la piscina estaba un poco fría.', '2025-02-03 22:45:00'),
(81, 2, 21, 4, 'Buen hotel, pero podría mejorar el servicio de transporte hacia el centro de la ciudad.', '2025-02-03 22:50:00'),
(82, 2, 21, 5, 'Excelente experiencia. La atención fue increíble y la habitación muy cómoda.', '2025-02-03 22:55:00'),
(83, 3, 21, 5, 'Maravilloso. Lo mejor fue la atención personalizada. Volvería sin duda.', '2025-02-03 23:00:00'),
(84, 3, 21, 4, 'El servicio fue excelente, pero la habitación estaba un poco fría.', '2025-02-03 23:05:00'),
(85, 2, 22, 5, 'Un lugar ideal para descansar, el servicio y las instalaciones son de primera.', '2025-02-03 23:10:00'),
(86, 2, 22, 4, 'Muy buena opción, pero el servicio en el restaurante fue un poco lento.', '2025-02-03 23:15:00'),
(87, 3, 22, 5, 'Excelente en todo. El servicio fue de calidad y la comida deliciosa.', '2025-02-03 23:20:00'),
(88, 3, 22, 4, 'El hotel es bueno, pero la limpieza no fue la mejor en mi habitación.', '2025-02-03 23:25:00'),
(89, 2, 23, 5, 'Un hotel increíble, moderno y con todas las comodidades necesarias.', '2025-02-03 23:30:00'),
(90, 2, 23, 4, 'Excelente atención y limpieza, aunque la comida podría ser más variada.', '2025-02-03 23:35:00'),
(91, 3, 23, 5, 'Todo estuvo perfecto, las instalaciones muy modernas y limpias. El trato fue excelente.', '2025-02-03 23:40:00'),
(92, 3, 23, 4, 'Muy buen hotel, pero el aire acondicionado podría mejorar en eficiencia.', '2025-02-03 23:45:00'),
(93, 2, 24, 5, 'Excelente hotel, perfecto para relajarse. La habitación y el servicio fueron excelentes.', '2025-02-03 23:50:00'),
(94, 2, 24, 4, 'Muy buena opción, aunque la señal de wifi es un poco débil en algunas áreas.', '2025-02-03 23:55:00'),
(95, 3, 24, 5, 'Todo estuvo genial, la piscina y el servicio fueron excepcionales.', '2025-02-04 00:00:00'),
(96, 3, 24, 4, 'El servicio fue bueno, pero la comida podría mejorar un poco en variedad.', '2025-02-04 00:05:00'),
(97, 2, 25, 5, 'Un hotel de lujo, el servicio es espectacular y las habitaciones muy cómodas.', '2025-02-04 00:10:00'),
(98, 2, 25, 4, 'Muy buen hotel, pero la limpieza podría mejorar un poco.', '2025-02-04 00:15:00'),
(99, 3, 25, 5, 'Muy buen hotel, la ubicación y las instalaciones son excelentes. Volveré sin dudarlo.', '2025-02-04 00:20:00'),
(100, 3, 25, 4, 'Todo muy bien, pero el precio es un poco elevado para lo que ofrece.', '2025-02-04 00:25:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipos_habitacion`
--

CREATE TABLE `tipos_habitacion` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `capacidad` int(11) NOT NULL,
  `camas` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tipos_habitacion`
--

INSERT INTO `tipos_habitacion` (`id`, `nombre`, `capacidad`, `camas`) VALUES
(1, 'Individual', 1, 1),
(2, 'Doble', 2, 2),
(3, 'Suite', 4, 2),
(4, 'Familiar', 6, 3),
(5, 'Penthouse', 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `rol` enum('admin','usuario') NOT NULL,
  `activo` tinyint(1) DEFAULT 1,
  `creado_en` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `contraseña`, `rol`, `activo`, `creado_en`) VALUES
(1, 'alex', 'ale@gmail.com', '$2y$10$6jSBxC8WFEtVBjW/LdQpGOqaCQSQZZtYkWvlDsZ/oUA97BBWtjEry', 'admin', 1, '2025-01-30 16:10:12'),
(2, 'jorge', 'jorge@gmail.com', '$2y$10$J4nLCafMwxc5cooU6bijq.wyQGrLIEMC7oZAspdMeMUVag4VCpB22', 'usuario', 1, '2025-01-30 16:10:40'),
(3, 'alan', 'alan@gmail.com', '$2y$10$TyxfmOZcFp28h0S.KZ.hFeDAIZvhAHM0txoJaW0k2P8A74WxdVgwG', 'usuario', 1, '2025-01-30 16:11:01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes_sin_cuenta`
--
ALTER TABLE `clientes_sin_cuenta`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `hotel_id` (`hotel_id`,`numero_habitacion`),
  ADD KEY `tipo_habitacion_id` (`tipo_habitacion_id`);

--
-- Indices de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lugar_id` (`lugar_id`);

--
-- Indices de la tabla `lugares_turisticos`
--
ALTER TABLE `lugares_turisticos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `reservacion_id` (`reservacion_id`);

--
-- Indices de la tabla `reservaciones`
--
ALTER TABLE `reservaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `habitacion_id` (`habitacion_id`),
  ADD KEY `fk_reservaciones_cliente_sin_cuenta` (`cliente_sin_cuenta_id`);

--
-- Indices de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `hotel_id` (`hotel_id`);

--
-- Indices de la tabla `tipos_habitacion`
--
ALTER TABLE `tipos_habitacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes_sin_cuenta`
--
ALTER TABLE `clientes_sin_cuenta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=426;

--
-- AUTO_INCREMENT de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `lugares_turisticos`
--
ALTER TABLE `lugares_turisticos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `pagos`
--
ALTER TABLE `pagos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reservaciones`
--
ALTER TABLE `reservaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `reseñas`
--
ALTER TABLE `reseñas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `tipos_habitacion`
--
ALTER TABLE `tipos_habitacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `habitaciones`
--
ALTER TABLE `habitaciones`
  ADD CONSTRAINT `habitaciones_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`),
  ADD CONSTRAINT `habitaciones_ibfk_2` FOREIGN KEY (`tipo_habitacion_id`) REFERENCES `tipos_habitacion` (`id`);

--
-- Filtros para la tabla `hoteles`
--
ALTER TABLE `hoteles`
  ADD CONSTRAINT `hoteles_ibfk_1` FOREIGN KEY (`lugar_id`) REFERENCES `lugares_turisticos` (`id`);

--
-- Filtros para la tabla `pagos`
--
ALTER TABLE `pagos`
  ADD CONSTRAINT `pagos_ibfk_1` FOREIGN KEY (`reservacion_id`) REFERENCES `reservaciones` (`id`);

--
-- Filtros para la tabla `reservaciones`
--
ALTER TABLE `reservaciones`
  ADD CONSTRAINT `fk_reservaciones_cliente_sin_cuenta` FOREIGN KEY (`cliente_sin_cuenta_id`) REFERENCES `clientes_sin_cuenta` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `reservaciones_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `reservaciones_ibfk_2` FOREIGN KEY (`habitacion_id`) REFERENCES `habitaciones` (`id`);

--
-- Filtros para la tabla `reseñas`
--
ALTER TABLE `reseñas`
  ADD CONSTRAINT `reseñas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `reseñas_ibfk_2` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
