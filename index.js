#ifndef DISPLAY_SERVER_H
#define DISPLAY_SERVER_H

#include "core/input/input.h"
#include "core/io/resource.h"
#include "core/os/os.h"
#include "core/variant/callable.h"

class Texture2D;

class DisplayServer : public Object {
	GDCLASS(DisplayServer, Object)

	static DisplayServer *singleton;
	static bool hidpi_allowed;
